import React, { Component } from "react";
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import styles from "../css/kids.module.css";
import moment from "moment";
import { DatePicker, Space } from "antd";
import {
  getTadbir,
  editTadbir,
  createTadbir,
  deleteTadbir,
} from "../host/Config";
import { idBogcha } from "../host/Host";
export default class Educatortadbirlar extends Component {
  state = {
    Tadbir: [],
    kids1: {},
    image: null,
    imageF: null,
    name: "",
    text: "",
    address: "",
    date: null,
    dateF: null,
    editId: null,
  };

  deleteTadbirlar = (id) => {
    deleteTadbir(id)
      .then((res) => {
        this.getTadbirlar();
        console.log("Ma'lumot o'chirildi!");
      })
      .catch((err) => {
        console.log("Ma'lumot o'chirilmadi!");
      });
  };

  getTadbirlar = () => {
    getTadbir()
      .then((res) =>
        this.setState({
          Tadbir: res.data,
        })
      )
      .catch((err) => console.log(err));
  };
  customRequest = (e) => {
    this.setState({ image: e.target.files[0] });
  };
  datePick = (a, b) => {
    this.setState({ date: b, dateF: a });
  };
  reset = () => {
    this.setState({
      image: null,
      imageF: null,
      name: "",
      otm: "",
      text: "",
      address: "",
      date: null,
      dateF: null,
      editId: null,
    });
  };
  editTadbir = (id) => {
    console.log(this.state.Tadbir[id]);
    this.setState({
      editId: this.state.Tadbir[id].id,
      imageF: this.state.Tadbir[id].image,
      name: this.state.Tadbir[id].name,
      address: this.state.Tadbir[id].address,
      text: this.state.Tadbir[id].text,
      date: this.state.Tadbir[id].date,
      dateF: moment(this.state.Tadbir[id].date),
    });
  };

  saveTadbir = (e) => {
    var info = {
      name: this.state.name,
      address: this.state.address,
      text: this.state.text,
      date: this.state.date,
    };
    var bodyFormData = new FormData();
    bodyFormData.append("name", this.state.name ?? "");
    bodyFormData.append("address", this.state.address ?? "");
    bodyFormData.append("text", this.state.text ?? "");
    bodyFormData.append("image", this.state.image ?? null);
    bodyFormData.append("date", this.state.date ?? null);
    bodyFormData.append("kg", idBogcha);
    if (this.state.editId === null) {
      createTadbir(bodyFormData)
        .then((res) => {
          this.getTadbirlar();
          this.reset();
        })
        .catch((err) => {
          console.log("Ishlamadi");
        });
    } else {
      if (this.state.image === null) {
        editTadbir(info, this.state.editId)
          .then((res) => {
            this.getTadbirlar();
            this.reset();
          })
          .catch((err) => console.log("Ma'lumot o'zgarmadi!"));
      } else {
        editTadbir(bodyFormData, this.state.editId)
          .then((res) => {
            this.getTadbirlar();
            this.reset();
          })
          .catch((err) => console.log("Ma'lumot o'zgarmadi!"));
      }
    }
  };

  componentDidMount() {
    this.getTadbirlar();
  }

  onnameName = (e) => {
    this.setState({ name: e.target.value });
  };

  onTextName = (e) => {
    this.setState({ text: e.target.value });
  };
  onaddressName = (e) => {
    this.setState({ address: e.target.value });
  };

  render() {
    const { RangePicker } = DatePicker;
    const dateFormat = "DD-MM-YYYY";
    const customFormat = (value) =>
      `custom format: ${value.format(dateFormat)}`;

    return (
      <div style={{ padding: "3%" }}>
        <div className={styles.formAdmin}>
          <h4>Tadbirlar</h4>

          <Form id="formAdmin">
            <Row>
              <Col>
                {" "}
                <Form.Group controlId="name" style={{ marginBottom: "20px" }}>
                  <Form.Label>Sarlavha</Form.Label>
                  <Form.Control
                    value={this.state.name}
                    onChange={this.onnameName}
                    type="text"
                    placeholder="Sarlavhani kiriting"
                  />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Rasm kiriting </Form.Label>
                  <br />
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={this.customRequest}
                  />
                </Form.Group>
                <Space direction="vertical" size={12}>
                  <Form.Label>Tug'ilgan yil,oy,sanani kiriting</Form.Label>
                  <DatePicker
                    // defaultValue={moment("2000/01/01", dateFormat)}
                    format={dateFormat}
                    onChange={this.datePick}
                    value={this.state.dateF}
                  />
                </Space>
                <Form.Group controlId="name" style={{ marginBottom: "20px" }}>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    value={this.state.address}
                    onChange={this.onaddressName}
                    type="address"
                    placeholder="Addressni kiriting"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Qo'shimcha ma'lumot</Form.Label>
                  <Form.Control
                    value={this.state.text}
                    onChange={this.onTextName}
                    as="textarea"
                    rows={3}
                    placeholder="Qo'shimcha ma'lumotlar..."
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button
              // type="submit"
              variant="primary"
              className={styles.inputFormBtn}
              onClick={() => this.saveTadbir()}
            >
              O'zgarishlarni saqlash
            </Button>
            <Button
              variant="primary"
              className={styles.inputFormBtn1}
              onClick={this.reset}
            >
              Bekor qilish
            </Button>
          </Form>
        </div>

        {this.state.Tadbir.map((item, key) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={item.image}
                style={{ width: "285px", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Tadbirlar</Card.Title>
                <Card.Text>
                  <ul style={{ fontWeight: "600" }}>
                    {/* <li>
                    <img
                        src={item.image}
                        style={{ width: "200px", height: "200px" }}
                      ></img>
                    </li> */}

                    <li style={{ fontWeight: "600" }}>Sarlavha:{item.name}</li>
                    <li>Manzil:{item.address}</li>
                    <li>Ma'lumot:{item.text}</li>
                    <li>Sana:{item.date}</li>
                  </ul>
                </Card.Text>
                <Button
                  style={{
                    backgroundColor: "green",
                    padding: "3px 10px",
                    fontSize: "17px",
                    border: "none",
                  }}
                  onClick={() => this.editTadbir(key)}
                >
                  O'zgartirish
                </Button>

                <Button
                  style={{
                    backgroundColor: "red",
                    padding: "3px 10px",
                    fontSize: "17px",
                    border: "none",
                  }}
                  onClick={() => this.deleteTadbirlar(item.id)}
                >
                  O'chirish
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}
