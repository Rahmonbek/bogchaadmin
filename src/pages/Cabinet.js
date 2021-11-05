import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import styles from "../css/kids.module.css";
import { Image, message, Select } from "antd";
import { changePassword, editKg, getKg } from "../host/Config";
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
} from "react-yandex-maps";
import { url } from "../host/Host";

const { Option } = Select;
export default class Cabinet extends Component {
  state = {
    KG: {},
    input: true,
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
    dasturimage1: null,
    dasturimage2: null,
    dasturimage3: null,
    dasturimage1Url: null,
    dasturimage2Url: null,
    dasturimage3Url: null,
    address: "",
    number: null,
    phone: "",
    logo: null,
    logoUrl: null,
    ourHistory: "",
    whyUs: "",
    params: null,
    posttext1: "",
    postimage1: null,
    postimage1Url: null,
    posttext2: "",
    postimage2: null,
    postimage2Url: null,
    posttext3: "",
    postimage3: null,
    postimage3Url: null,
    posttext4: "",
    postimage4: null,
    postimage4Url: null,
    pass1: null,
    pass2: null,
    image: null,
    imageUrl: null,
    image1: null,
    imageUrl1: null,
    image2: null,
    imageUrl2: null,
    image3: null,
    imageUrl3: null,
    image4: null,
    imageUrl4: null,
    image5: null,
    imageUrl5: null,
    image6: null,
    imageUrl6: null,
    image7: null,
    imageUrl7: null,
    image8: null,
    imageUrl8: null,
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
          logoUrl: res.data.logo,
          dastur1: res.data.program1,
          dasturimage1Url: res.data.program1_img,
          dastur2: res.data.program2,
          dasturimage2Url: res.data.program2_img,
          dastur3: res.data.program3,
          dasturimage3Url: res.data.program3_img,
          ourHistory: res.data.our_history,
          whyUs: res.data.why_us,
          posttext1: res.data.post_text1,
          postimage1Url: res.data.post_image1,
          posttext2: res.data.post_text2,
          postimage2Url: res.data.post_image2,
          posttext3: res.data.post_text3,
          postimage3Url: res.data.post_image3,
          posttext4: res.data.post_text4,
          postimage4Url: res.data.post_image4,
          imageUrl: res.data.media.image,
          imageUrl1: res.data.media.image1,
          imageUrl2: res.data.media.image2,
          imageUrl3: res.data.media.image3,
          imageUrl4: res.data.media.image4,
          imageUrl5: res.data.media.image5,
          imageUrl6: res.data.media.image6,
          imageUrl7: res.data.media.image7,
          imageUrl8: res.data.media.image8,
        });
      })
      .catch((err) => console.log(err));
  };
  customRequest = (e) => {
    this.setState({ image: e.target.files[0] });
  };
  editKinderGarden = () => {
    var data = new FormData();
    if (this.state.email !== this.state.KG.email)
      data.append("email", this.state.email ?? "");
    if (this.state.name !== this.state.KG.name)
      data.append("name", this.state.name ?? "");
    if (this.state.params !== this.state.KG.params)
      data.append("params", this.state.params ?? "");
    if (this.state.logo !== null) {
      data.append("logo", this.state.logo ?? "");
    }
    if (this.state.instagram !== this.state.KG.instagram)
      data.append("instagram", this.state.instagram ?? "");
    if (this.state.telegram !== this.state.KG.telegram)
      data.append("telegram", this.state.telegram ?? "");
    if (this.state.facebook !== this.state.KG.facebook)
      data.append("facebook", this.state.facebook ?? "");
    if (this.state.viloyat !== this.state.KG.viloyat)
      data.append("viloyat", this.state.viloyat ?? "");
    if (this.state.tuman !== this.state.KG.tuman)
      data.append("tuman", this.state.tuman ?? "");
    if (this.state.address !== this.state.KG.address)
      data.append("address", this.state.address ?? "");
    if (this.state.number !== this.state.KG.number)
      data.append("number", this.state.number ?? "");
    if (this.state.phone !== this.state.KG.phone)
      data.append("phone", this.state.phone ?? "");
    if (this.state.dastur1 !== this.state.KG.program1)
      data.append("program1", this.state.dastur1 ?? "");
    if (this.state.dastur2 !== this.state.KG.program2)
      data.append("program2", this.state.dastur2 ?? "");
    if (this.state.dastur3 !== this.state.KG.program3)
      data.append("program3", this.state.dastur3 ?? "");
    if (this.state.ourHistory !== this.state.KG.our_history)
      data.append("our_history", this.state.ourHistory ?? "");
    if (this.state.whyUs !== this.state.KG.why_us)
      data.append("why_us", this.state.whyUs ?? "");
    if (this.state.posttext1 !== this.state.KG.post_text1)
      data.append("post_text1", this.state.posttext1 ?? "");
    if (this.state.posttext2 !== this.state.KG.post_text2)
      data.append("post_text2", this.state.posttext2 ?? "");
    if (this.state.posttext3 !== this.state.KG.post_text3)
      data.append("post_text3", this.state.posttext3 ?? "");
    if (this.state.posttext4 !== this.state.KG.post_text4)
      data.append("post_text4", this.state.posttext4 ?? "");
    if (this.state.postimage1 !== null)
      data.append("post_image1", this.state.postimage1 ?? "");
    if (this.state.postimage2 !== null)
      data.append("post_image2", this.state.postimage2 ?? "");
    if (this.state.postimage3 !== null)
      data.append("post_image3", this.state.postimage3 ?? "");
    if (this.state.postimage4 !== null)
      data.append("post_image4", this.state.postimage4 ?? "");
    if (this.state.dasturimage1 !== null)
      data.append("program1_img", this.state.dasturimage1 ?? "");
    if (this.state.dasturimage2 !== null)
      data.append("program2_img", this.state.dasturimage2 ?? "");
    if (this.state.dasturimage3 !== null)
      data.append("program3_img", this.state.dasturimage3 ?? "");
    editKg(data)
      .then((res) => {
        this.getKinderGarden();
        this.setState({
          postimage1: null,
          postimage2: null,
          postimage3: null,
          postimage4: null,
          logo: null,
          dasturimage1: null,
          dasturimage2: null,
          dasturimage3: null,
        });
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
  onDasturimage1 = (e) => {
    this.setState({ dasturimage1: e.target.files[0] });
  };
  onDasturimage2 = (e) => {
    this.setState({ dasturimage2: e.target.files[0] });
  };
  onDasturimage3 = (e) => {
    this.setState({ dasturimage3: e.target.files[0] });
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
  onImage = (e) => {
    this.setState({ image: e.target.files[0] });
  };
  onImage1 = (e) => {
    this.setState({ image1: e.target.files[0] });
  };
  onImage2 = (e) => {
    this.setState({ image2: e.target.files[0] });
  };
  onImage3 = (e) => {
    this.setState({ image3: e.target.files[0] });
  };
  onImage4 = (e) => {
    this.setState({ image4: e.target.files[0] });
  };
  onImage5 = (e) => {
    this.setState({ image5: e.target.files[0] });
  };
  onImage6 = (e) => {
    this.setState({ image6: e.target.files[0] });
  };
  onImage7 = (e) => {
    this.setState({ image7: e.target.files[0] });
  };
  onImage8 = (e) => {
    this.setState({ image8: e.target.files[0] });
  };
  onPassword = () => {
    var pass = {
      new_password1: this.state.pass1,
      new_password2: this.state.pass2,
    };
    changePassword(pass, localStorage.getItem("token"))
      .then((res) => {
        message.success("Parol o'zgartirildi.");
      })
      .catch((err) => {
        message.error("Yangi parol saqlanmadi!");
      });
  };
  onPass1 = (e) => {
    this.setState({ pass1: e.target.value });
  };
  onPass2 = (e) => {
    this.setState({ pass2: e.target.value });
  };
  onMapClick = (e) => {
    var coords = e.get("coords");
    this.setState({
      params: coords,
    });
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
                <Col lg={6}>
                  <Form.Group controlId="pass1" className="mb-3">
                    <Form.Label
                      style={{
                        borderBottom: "1px solid black",
                        marginBottom: "20px",
                        fontSize: "16px",
                      }}
                    >
                      Yangi parolni kiriting
                    </Form.Label>
                    <Form.Control
                      className="formInput"
                      type={this.state.input ? "password" : "text"}
                      onChange={this.onPass1}
                      value={this.state.pass1}
                      required={true}
                    />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group controlId="pass2" className="mb-3">
                    <Form.Label
                      style={{
                        borderBottom: "1px solid black",
                        marginBottom: "20px",
                        fontSize: "16px",
                      }}
                    >
                      Yangi parolni qayta kiriting
                    </Form.Label>
                    <Form.Control
                      className="formInput"
                      type={this.state.input ? "password" : "text"}
                      onChange={this.onPass2}
                      value={this.state.pass2}
                      required={true}
                    />
                  </Form.Group>
                </Col>
                <Col
                  lg={12}
                  style={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "end",
                  }}
                >
                  <Button
                    style={{ top: "20px", marginRight: "20px" }}
                    variant="danger"
                    onClick={() => this.setState({ pass1: "", pass2: "" })}
                  >
                    Bekor qilish
                  </Button>
                  <Button
                    style={{ top: "20px", marginRight: "20px" }}
                    variant="success"
                    onClick={() => this.setState({ input: !this.state.input })}
                  >
                    Parolni ko'rish
                  </Button>
                  <Button
                    style={{ top: "20px" }}
                    variant="primary"
                    onClick={this.onPassword}
                  >
                    Parolni saqlash
                  </Button>
                </Col>
              </Row>
            </div>
            <div className={styles.formAdmin}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>Bog'cha raqami</Form.Label>
                    <Form.Control
                      type="number"
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
                    <Form.Label>Bog'cha joylashgan viloyati</Form.Label>
                    <Select
                      value={this.state.viloyat}
                      onChange={this.onViloyat}
                      showSearch
                      style={{
                        width: "100%",
                        fontSize: "1rem",
                        padding: ".375rem, .75rem",
                      }}
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
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>Bog'cha logotipini kiriting</Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.customRequest}
                    />
                  </Form.Group>
                  {this.state.logoUrl !== null && this.state.logo === null ? (
                    <div className={styles.image}>
                      <Image
                        src={`${url + this.state.logoUrl}`}
                        height="100%"
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
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
                  rows={6}
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
                  rows={6}
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
                      matni
                    </Form.Label>
                    <Form.Control
                      value={this.state.posttext1}
                      onChange={this.onPosttext1}
                      rows={12}
                      as="textarea"
                      placeholder="Mehribon va tarbiyalovchi muhit"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Bog'cha sahifasi "Mehribon va tarbiyalovchi muhit" uchun
                      rasmi
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onPostimage1}
                    />
                  </Form.Group>
                  {this.state.postimage1Url !== null &&
                  this.state.postimage1 === null ? (
                    <div className={styles.image}>
                      <Image
                        src={`${url + this.state.postimage1Url}`}
                        height="100%"
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </div>
            <div className={styles.formAdmin}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>
                      Bog'cha sahifasi "Ajoyib/qiziquvchanlik" uchun matni
                    </Form.Label>
                    <Form.Control
                      value={this.state.posttext2}
                      onChange={this.onPosttext2}
                      rows={12}
                      as="textarea"
                      placeholder="Ajoyib/qiziquvchanlik"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Bog'cha sahifasi "Ajoyib/qiziquvchanlik" uchun rasmi
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onPostimage2}
                    />
                  </Form.Group>
                  {this.state.postimage2Url !== null &&
                  this.state.postimage2 === null ? (
                    <div className={styles.image}>
                      <Image
                        src={`${url + this.state.postimage2Url}`}
                        height="100%"
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </div>
            <div className={styles.formAdmin}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>
                      Bog'cha sahifasi "G'ayrat. Nishon. Yetakchilik" uchun
                      matni
                    </Form.Label>
                    <Form.Control
                      value={this.state.posttext3}
                      onChange={this.onPosttext3}
                      rows={12}
                      as="textarea"
                      placeholder="G'ayrat. Nishon. Yetakchilik"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Bog'cha sahifasi "G'ayrat. Nishon. Yetakchilik" uchun
                      rasmi
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onPostimage3}
                    />
                  </Form.Group>
                  {this.state.postimage3Url !== null &&
                  this.state.postimage3 === null ? (
                    <div className={styles.image}>
                      <Image
                        src={`${url + this.state.postimage3Url}`}
                        height="100%"
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </div>
            <div className={styles.formAdmin}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>
                      Bog'cha sahifasi "Bizning dunyomizni bir vaqtning o'zida
                      bitta bolani o'zgartirish" uchun matni
                    </Form.Label>
                    <Form.Control
                      value={this.state.posttext4}
                      onChange={this.onPosttext4}
                      rows={12}
                      as="textarea"
                      placeholder="Bizning dunyomizni bir vaqtning o'zida bitta bolani o'zgartirish"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Bog'cha sahifasi "Bizning dunyomizni bir vaqtning o'zida
                      bitta bolani o'zgartirish" uchun rasmi
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onPostimage4}
                    />
                  </Form.Group>
                  {this.state.postimage4Url !== null &&
                  this.state.postimage4 === null ? (
                    <div className={styles.image}>
                      <Image
                        src={`${url + this.state.postimage4Url}`}
                        height="100%"
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </div>
            <div className={styles.formAdmin}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>
                      Bog'cha dastur 1-bosqich degan sahifasi matni
                    </Form.Label>
                    <Form.Control
                      value={this.state.dastur1}
                      onChange={this.onDastur1}
                      rows={12}
                      as="textarea"
                      placeholder="Dastur 1-bosqich..."
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Bog'cha dastur 1-bosqich degan sahifasi rasmi
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onDasturimage1}
                    />
                  </Form.Group>
                  {this.state.dasturimage1Url !== null &&
                  this.state.dasturimage1 === null ? (
                    <div className={styles.image}>
                      <Image
                        src={`${url + this.state.dasturimage1Url}`}
                        height="100%"
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </div>
            <div className={styles.formAdmin}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>
                      Bog'cha dastur 2-bosqich degan sahifasi matni
                    </Form.Label>
                    <Form.Control
                      value={this.state.dastur2}
                      onChange={this.onDastur2}
                      rows={12}
                      as="textarea"
                      placeholder="Dastur 2-bosqich..."
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Bog'cha dastur 2-bosqich degan sahifasi rasmi
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onDasturimage2}
                    />
                  </Form.Group>
                  {this.state.dasturimage2Url !== null &&
                  this.state.dasturimage2 === null ? (
                    <div className={styles.image}>
                      <Image
                        src={`${url + this.state.dasturimage2Url}`}
                        height="100%"
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </div>
            <div className={styles.formAdmin}>
              <Row>
                <Col>
                  <Form.Group className="mb-3" style={{ marginBottom: "20px" }}>
                    <Form.Label>
                      Bog'cha dastur 3-bosqich degan sahifasi matni
                    </Form.Label>
                    <Form.Control
                      value={this.state.dastur3}
                      onChange={this.onDastur3}
                      rows={12}
                      as="textarea"
                      placeholder="Dastur 3-bosqich..."
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Bog'cha dastur 3-bosqich degan sahifasi rasmi
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onDasturimage3}
                    />
                  </Form.Group>
                  {this.state.dasturimage3Url !== null &&
                  this.state.dasturimage3 === null ? (
                    <div className={styles.image}>
                      <Image
                        src={`${url + this.state.dasturimage3Url}`}
                        height="100%"
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </div>
            <div className={styles.formAdmin}>
              <Row>
                <Col style={{ marginTop: "10px", marginBottom: "10px" }}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Bog'cha bosh sahifalari uchun 1-rasm
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onImage}
                    />
                  </Form.Group>
                  {this.state.imageUrl !== null && this.state.image === null ? (
                    <div className={styles.image}>
                      <Image
                        src={`${url + this.state.imageUrl}`}
                        height="100%"
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
                <Col style={{ marginTop: "10px", marginBottom: "10px" }}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Bog'cha bosh sahifalari uchun 2-rasm
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onImage1}
                    />
                  </Form.Group>
                  {this.state.imageUrl1 !== null &&
                  this.state.image1 === null ? (
                    <div className={styles.image}>
                      <Image
                        src={`${url + this.state.imageUrl1}`}
                        height="100%"
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
                <Col style={{ marginTop: "10px", marginBottom: "10px" }}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Bog'cha bosh sahifalari uchun 3-rasm
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onImage2}
                    />
                  </Form.Group>
                  {this.state.imageUrl2 !== null &&
                  this.state.image2 === null ? (
                    <div className={styles.image}>
                      <Image
                        src={`${url + this.state.imageUrl2}`}
                        height="100%"
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
                <Col style={{ marginTop: "10px", marginBottom: "10px" }}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Bog'cha bosh sahifalari uchun 4-rasm
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onImage3}
                    />
                  </Form.Group>
                  {this.state.imageUrl3 !== null &&
                  this.state.image3 === null ? (
                    <div className={styles.image}>
                      <Image
                        src={`${url + this.state.imageUrl3}`}
                        height="100%"
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
                <Col style={{ marginTop: "10px", marginBottom: "10px" }}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Bog'cha bosh sahifalari uchun 5-rasm
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onImage4}
                    />
                  </Form.Group>
                  {this.state.imageUrl4 !== null &&
                  this.state.image4 === null ? (
                    <div className={styles.image}>
                      <Image
                        src={`${url + this.state.imageUrl4}`}
                        height="100%"
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
                <Col style={{ marginTop: "10px", marginBottom: "10px" }}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Bog'cha bosh sahifalari uchun 6-rasm
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onImage5}
                    />
                  </Form.Group>
                  {this.state.imageUrl5 !== null &&
                  this.state.image5 === null ? (
                    <div className={styles.image}>
                      <Image
                        src={`${url + this.state.imageUrl5}`}
                        height="100%"
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
                <Col style={{ marginTop: "10px", marginBottom: "10px" }}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Bog'cha bosh sahifalari uchun 7-rasm
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onImage6}
                    />
                  </Form.Group>
                  {this.state.imageUrl6 !== null &&
                  this.state.image6 === null ? (
                    <div className={styles.image}>
                      <Image
                        src={`${url + this.state.imageUrl6}`}
                        height="100%"
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
                <Col style={{ marginTop: "10px", marginBottom: "10px" }}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Bog'cha bosh sahifalari uchun 8-rasm
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onImage7}
                    />
                  </Form.Group>
                  {this.state.imageUrl7 !== null &&
                  this.state.image7 === null ? (
                    <div className={styles.image}>
                      <Image
                        src={`${url + this.state.imageUrl7}`}
                        height="100%"
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
                <Col style={{ marginTop: "10px", marginBottom: "10px" }}>
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Bog'cha bosh sahifalari uchun 9-rasm
                    </Form.Label>
                    <Form.Control
                      type="file"
                      accept="image/*"
                      onChange={this.onImage8}
                    />
                  </Form.Group>
                  {this.state.imageUrl8 !== null &&
                  this.state.image8 === null ? (
                    <div className={styles.image}>
                      <Image
                        src={`${url + this.state.imageUrl8}`}
                        height="100%"
                        alt=""
                      />
                    </div>
                  ) : (
                    ""
                  )}
                </Col>
              </Row>
            </div>
          </Form>
          <Button
            style={{
              position: "fixed",
              right: "0",
              bottom: "50px",
              backgroundColor: "darkblue",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
              paddingLeft: "30px",
              paddingRight: "30px",
            }}
            onClick={this.editKinderGarden}
          >
            Ma'lumotlarni saqlash
          </Button>
        </Container>
      </div>
    );
  }
}
