import React, { Component } from "react";
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import styles from "../css/kids.module.css";
import moment from "moment";
import { DatePicker, Space } from "antd";
import { getNews, editNews, createNews, deleteNews } from "../host/Config";
import { idBogcha } from "../host/Host";
export default class EducatorYangiliklar extends Component {
  state = {
    News: [],
    kids1: {},
    image: null,
    imageF: null,
    title: "",
    text: "",
    date: null,
    dateF: null,
    editId: null,
  };

  deleteNews = (id) => {
    deleteNews(id)
      .then((res) => {
        this.getYangilik();
        console.log("Ma'lumot o'chirildi!");
      })
      .catch((err) => {
        console.log("Ma'lumot o'chirilmadi!");
      });
  };

  getYangilik = () => {
    getNews()
      .then((res) =>
        this.setState({
          News: res.data,
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
      title: "",
      otm: "",
      text: "",
      date: null,
      dateF: null,
      editId: null,
    });
  };
  editNews = (id) => {
    console.log(this.state.News[id]);
    this.setState({
      editId: this.state.News[id].id,
      imageF: this.state.News[id].image,
      title: this.state.News[id].title,
      text: this.state.News[id].text,
      date: this.state.News[id].date,
      dateF: moment(this.state.News[id].date),
    });
  };

  saveNews = (e) => {
    var info = {
      title: this.state.title,
      text: this.state.text,
      date: this.state.date,
    };
    var bodyFormData = new FormData();
    bodyFormData.append("title", this.state.title ?? "");
    bodyFormData.append("text", this.state.text ?? "");
    bodyFormData.append("image", this.state.image ?? null);
    bodyFormData.append("date", this.state.date ?? null);
    bodyFormData.append("kg", idBogcha);
    if (this.state.editId === null) {
      createNews(bodyFormData)
        .then((res) => {
          this.getYangilik();
          this.reset();
        })
        .catch((err) => {
          console.log("Ishlamadi");
        });
    } else {
      if (this.state.image === null) {
        editNews(info, this.state.editId)
          .then((res) => {
            this.getYangilik();
            this.reset();
          })
          .catch((err) => console.log("Ma'lumot o'zgarmadi!"));
      } else {
        editNews(bodyFormData, this.state.editId)
          .then((res) => {
            this.getYangilik();
            this.reset();
          })
          .catch((err) => console.log("Ma'lumot o'zgarmadi!"));
      }
    }
  };

  componentDidMount() {
    this.getYangilik();
  }

  onTitleName = (e) => {
    this.setState({ title: e.target.value });
  };

  onTextName = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    const { RangePicker } = DatePicker;
    const dateFormat = "DD-MM-YYYY";
    const customFormat = (value) =>
      `custom format: ${value.format(dateFormat)}`;

    return (
      <div style={{ padding: "3%" }}>
        <div className={styles.formAdmin}>
          <h4>Yangiliklar</h4>

          <Form id="formAdmin">
            <Row>
              <Col>
                {" "}
                <Form.Group controlId="name" style={{ marginBottom: "20px" }}>
                  <Form.Label>Sarlavha</Form.Label>
                  <Form.Control
                    value={this.state.title}
                    onChange={this.onTitleName}
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
              onClick={() => this.saveNews()}
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

        {this.state.News.map((item, key) => {
          return (
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={item.image}
                style={{ width: "285px", height: "200px" }}
              />
              <Card.Body>
                <Card.Title>Yangiliklar</Card.Title>
                <Card.Text>
                  <ul>
                    {/* <li>
                    <img
                        src={item.image}
                        style={{ width: "200px", height: "200px" }}
                      ></img>
                    </li> */}
                    <li>{item + 1}</li>
                    <li>{item.title}</li>

                    <li>{item.text}</li>
                    <li>{item.date}</li>
                  </ul>
                </Card.Text>
                <Button
                  style={{
                    backgroundColor: "green",
                    padding: "3px 10px",
                    fontSize: "17px",
                    border: "none",
                  }}
                  onClick={() => this.editNews(key)}
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
                  onClick={() => this.deleteNews(item.id)}
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
