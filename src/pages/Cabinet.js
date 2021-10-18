import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styles from "../css/kids.module.css";
import { Select } from "antd";
import { editKg, getKg } from "../host/Config";
import {
  YMaps,
  Map,
  Clusterer,
  Placemark,
  TypeSelector,
  ZoomControl,
  GeolocationControl,
  RouteButton,
  TrafficControl,
  GeoObject,
} from "react-yandex-maps";

const { Option } = Select;
export default class Cabinet extends Component {
  state = {
    KG: {},
    email: "",
    name: "",
    instagram: "",
    telegram: "",
    facebook: "",
    tuman: "",
    viloyat: "",
    dastur1: "",
    dastur2: "",
    dastur3: "",
    address: "",
    number: null,
    phone: "",
    logo: null,
    ourHistory: "",
    whyUs: "",
    params: null,
    posttext1: "",
    postimage1: null,
    posttext2: "",
    postimage2: null,
    posttext3: "",
    postimage3: null,
    posttext4: "",
    postimage4: null,
  };
  getKinderGarden = () => {
    getKg()
      .then((res) => {
        this.setState({
          params: [Number(res.data.params[0]), Number(res.data.params[1])],
          KG: res.data,
          email: res.data.email,
          name: res.data.name,
          instagram: res.data.instagram,
          telegram: res.data.telegram,
          facebook: res.data.facebook,
          viloyat: res.data.viloyat,
          tuman: res.data.tuman,
          address: res.data.address,
          number: res.data.number,
          phone: res.data.phone,
          logo: res.data.logo,
          dastur1: res.data.program1,
          dastur2: res.data.program2,
          dastur3: res.data.program3,
          ourHistory: res.data.our_history,
          whyUs: res.data.why_us,
          posttext1: res.data.post_text1,
          postimage1: res.data.post_image1,
          posttext2: res.data.post_text2,
          postimage2: res.data.post_image2,
          posttext3: res.data.post_text3,
          postimage3: res.data.post_image3,
          posttext4: res.data.post_text4,
          postimage4: res.data.post_image4,
        });
      })
      .catch((err) => console.log(err));
  };
  customRequest = (e) => {
    this.setState({ image: e.target.files[0] });
  };
  editKinderGarden = () => {
    var data = {
      email: this.state.email,
      name: this.state.name,
      instagram: this.state.instagram,
      telegram: this.state.telegram,
      facebook: this.state.facebook,
      viloyat: this.state.viloyat,
      tuman: this.state.tuman,
      address: this.state.address,
      number: this.state.number,
      phone: this.state.phone,
      program1: this.state.dastur1,
      program2: this.state.dastur2,
      program3: this.state.dastur3,
      our_history: this.state.ourHistory,
      why_us: this.state.whyUs,
      params: this.state.params,
      post_text1: this.state.posttext1,
      // post_image1: this.state.postimage1,
      post_text2: this.state.posttext2,
      // post_image2: this.state.postimage2,
      post_text3: this.state.posttext3,
      // post_image3: this.state.postimage3,
      post_text4: this.state.posttext4,
      // post_image4: this.state.postimage4,
    };
    editKg(data)
      .then((res) => {
        console.log(res.data);
        this.getKinderGarden();
      })
      .catch((err) => console.log(err));
  };
  componentDidMount() {
    this.getKinderGarden();
  }
  onNumber = (e) => {
    this.setState({ number: e.target.value });
  };
  onName = (e) => {
    this.setState({ name: e.target.value });
  };
  onEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  onPhone = (e) => {
    this.setState({ phone: e.target.value });
  };
  onTuman = (e) => {
    this.setState({ tuman: e.target.value });
  };
  onViloyat = (value) => {
    this.setState({ viloyat: value });
  };
  onAddress = (e) => {
    this.setState({ address: e.target.value });
  };
  onTelegram = (e) => {
    this.setState({ telegram: e.target.value });
  };
  onInstagram = (e) => {
    this.setState({ instagram: e.target.value });
  };
  onFacebook = (e) => {
    this.setState({ facebook: e.target.value });
  };
  onWhyus = (e) => {
    this.setState({ whyUs: e.target.value });
  };
  onOurhistory = (e) => {
    this.setState({ ourHistory: e.target.value });
  };
  onDastur1 = (e) => {
    this.setState({ dastur1: e.target.value });
  };
  onDastur2 = (e) => {
    this.setState({ dastur2: e.target.value });
  };
  onDastur3 = (e) => {
    this.setState({ dastur3: e.target.value });
  };
  onMapClick = (e) => {
    var coords = e.get("coords");
    this.setState({
      params: coords,
    });
  };
  onPosttext1 = (e) => {
    this.setState({ posttext1: e.target.value });
  };
  onPostimage1 = (e) => {
    this.setState({ postimage1: e.target.files[0] });
  };
  onPosttext2 = (e) => {
    this.setState({ posttext2: e.target.value });
  };
  onPostimage2 = (e) => {
    this.setState({ postimage2: e.target.files[0] });
  };
  onPosttext3 = (e) => {
    this.setState({ posttext3: e.target.value });
  };
  onPostimage3 = (e) => {
    this.setState({ postimage3: e.target.files[0] });
  };
  onPosttext4 = (e) => {
    this.setState({ posttext4: e.target.value });
  };
  onPostimage4 = (e) => {
    this.setState({ postimage4: e.target.files[0] });
  };
  render() {
    return (
      <div style={{ padding: "3%", width: "100%" }}>
        <div className={styles.formAdmin}>
          <YMaps>
            <Map
              onClick={this.onMapClick}
              width="100%"
              height="65vh"
              defaultState={{
                center:
                  this.state.params != null
                    ? this.state.params
                    : [41.79478951067519, 64.27236652149892],

                zoom: 6,
              }}
            >
              {
                <Clusterer
                  options={{
                    preset: "islands#invertedVioletClusterIcons",
                    groupByCoordinates: false,
                  }}
                >
                  <Placemark
                    key={0}
                    geometry={
                      this.state.params != null
                        ? this.state.params
                        : [41.79478951067519, 64.27236652149892]
                    }
                    properties={{
                      balloonContent: "Bog'cha binosi",
                    }}
                  />
                </Clusterer>
              }

              <GeolocationControl options={{ float: "left" }} />
              <TypeSelector options={{ float: "right" }} />
              <TrafficControl options={{ float: "right" }} />
              <RouteButton options={{ float: "right" }} />
              <ZoomControl options={{ float: "left" }} />
            </Map>
          </YMaps>
        </div>

        <Container>
          <Form>
            <div className={styles.formAdmin}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>Bog'cha raqami</Form.Label>
                    <Form.Control
                      type="number"
                      disabled
                      placeholder="Bog'cha raqami"
                      onChange={this.onNumber}
                      value={this.state.number}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>Bog'cha nomi</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Bog'cha nomi"
                      value={this.state.name}
                      onChange={this.onName}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>Bog'cha elektron pochtasi</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.email}
                      placeholder="info@gmail.com"
                      onChange={this.onEmail}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>Bog'cha telefon raqami</Form.Label>
                    <Form.Control
                      value={this.state.phone}
                      onChange={this.onPhone}
                      type="text"
                      pattern="+[0-9]{15}"
                      placeholder="+998935956664"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>Bog'cha telegram linki</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.telegram}
                      onChange={this.onTelegram}
                      placeholder="https://t.me/bogcha"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>Bog'cha instagram linki</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={this.onInstagram}
                      value={this.state.instagram}
                      placeholder="https://i.me/bogcha"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>Bog'cha facebook linki</Form.Label>
                    <Form.Control
                      value={this.state.facebook}
                      onChange={this.onFacebook}
                      type="text"
                      placeholder="https://facebook.com/bogcha"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Bog'cha logotip rasmini kiriting </Form.Label>
                    <br />
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.customRequest}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>Bog'cha joylashgan viloyati</Form.Label>
                    <br />
                    <Select
                      value={this.state.viloyat}
                      onChange={this.onViloyat}
                      showSearch
                      style={{ width: "100%" }}
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="Andijon">Andijon viloyat</Option>
                      <Option value="Namangan">Namangan viloyat</Option>
                      <Option value="Farg'ona">Farg'ona viloyat</Option>
                      <Option value="Sirdaryo">Sirdaryo viloyat</Option>
                      <Option value="Jizzax">Jizzax viloyat</Option>
                      <Option value="Samarqand">Samarqand viloyat</Option>
                      <Option value="Buxoro">Buxoro viloyat</Option>
                      <Option value="Navoiy">Navoiy viloyat</Option>
                      <Option value="Qashqadaryo">Qashqadaryo viloyat</Option>
                      <Option value="Surxondaryo">Surxondaryo viloyat</Option>
                      <Option value="Xorazm">Xorazm viloyat</Option>
                      <Option value="Toshkent">Toshkent viloyat</Option>
                      <Option value="Toshkent shahar">Toshkent shahar</Option>
                      <Option value="Qoraqalpog'iston Respublikasi">
                        Qoraqalpog'iston Respublikasi
                      </Option>
                    </Select>
                  </Form.Group>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>Bog'cha joylashgan tumani</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={this.onTuman}
                      value={this.state.tuman}
                      placeholder="Bog'cha joylashgan tumani"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>Bog'cha manzili</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.address}
                      onChange={this.onAddress}
                      placeholder="Bog'cha manzili"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className={styles.formAdmin}>
              <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                <Form.Label>
                  Bog'cha nima uchun biz degan sahifasi matni
                </Form.Label>
                <Form.Control
                  value={this.state.whyUs}
                  onChange={this.onWhyus}
                  rows={5}
                  as="textarea"
                  placeholder="Nima uchun biz..."
                />
              </Form.Group>
            </div>
            <div className={styles.formAdmin}>
              <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                <Form.Label>
                  Bog'cha bizning tarix degan sahifasi matni
                </Form.Label>
                <Form.Control
                  value={this.state.ourHistory}
                  onChange={this.onOurhistory}
                  rows={5}
                  as="textarea"
                  placeholder="Bizning tarix..."
                />
              </Form.Group>
            </div>
            <div className={styles.formAdmin}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>
                      Bog'cha sahifasi "Mehribon va tarbiyalovchi muhit" uchun
                      matn
                    </Form.Label>
                    <Form.Control
                      value={this.state.posttext1}
                      onChange={this.onPosttext1}
                      rows={8}
                      as="textarea"
                      placeholder="Mehribon va tarbiyalovchi muhit"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>
                      Bog'cha sahifasi "Mehribon va tarbiyalovchi muhit" uchun
                      matn
                    </Form.Label>
                    <br />
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onPostimage1}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className={styles.formAdmin}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>
                      Bog'cha sahifasi "Ajoyib/qiziquvchanlik" uchun matn
                    </Form.Label>
                    <Form.Control
                      value={this.state.posttext2}
                      onChange={this.onPosttext2}
                      rows={8}
                      as="textarea"
                      placeholder="Ajoyib/qiziquvchanlik"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>
                      Bog'cha sahifasi "Ajoyib/qiziquvchanlik" uchun matn
                    </Form.Label>
                    <br />
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onPostimage2}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className={styles.formAdmin}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>
                      Bog'cha sahifasi "G'ayrat. Nishon. Yetakchilik" uchun matn
                    </Form.Label>
                    <Form.Control
                      value={this.state.posttext3}
                      onChange={this.onPosttext3}
                      rows={8}
                      as="textarea"
                      placeholder="G'ayrat. Nishon. Yetakchilik"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>
                      Bog'cha sahifasi "G'ayrat. Nishon. Yetakchilik" uchun matn
                    </Form.Label>
                    <br />
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onPostimage3}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className={styles.formAdmin}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>
                      Bog'cha sahifasi "Bizning dunyomizni bir vaqtning o'zida
                      bitta bolani o'zgartirish" uchun matn
                    </Form.Label>
                    <Form.Control
                      value={this.state.posttext4}
                      onChange={this.onPosttext4}
                      rows={8}
                      as="textarea"
                      placeholder="Bizning dunyomizni bir vaqtning o'zida bitta bolani o'zgartirish"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>
                      Bog'cha sahifasi "Bizning dunyomizni bir vaqtning o'zida
                      bitta bolani o'zgartirish" uchun matn
                    </Form.Label>
                    <br />
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onPostimage4}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className={styles.formAdmin}>
              <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                <Form.Label>
                  Bog'cha dastur 1-bosqich degan sahifasi matni
                </Form.Label>
                <Form.Control
                  value={this.state.dastur1}
                  onChange={this.onDastur1}
                  rows={5}
                  as="textarea"
                  placeholder="Dastur 1-bosqich..."
                />
              </Form.Group>
            </div>
            <div className={styles.formAdmin}>
              <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                <Form.Label>
                  Bog'cha dastur 2-bosqich degan sahifasi matni
                </Form.Label>
                <Form.Control
                  value={this.state.dastur2}
                  onChange={this.onDastur2}
                  rows={5}
                  as="textarea"
                  placeholder="Dastur 2-bosqich..."
                />
              </Form.Group>
            </div>
            <div className={styles.formAdmin}>
              <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                <Form.Label>
                  Bog'cha dastur 3-bosqich degan sahifasi matni
                </Form.Label>
                <Form.Control
                  value={this.state.dastur3}
                  onChange={this.onDastur3}
                  rows={5}
                  as="textarea"
                  placeholder="Dastur 3-bosqich..."
                />
              </Form.Group>
            </div>
          </Form>
          <Button
            style={{
              position: "fixed",
              right: "0",
              bottom: "50px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
            onClick={this.editKinderGarden}
          >
            Saqlash
          </Button>
        </Container>
      </div>
    );
  }
}
