import React from "react";
import "../contact-us/style.scss";
import "../../assets/style/custom.scss";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { BsFillTelephoneFill } from "react-icons/bs";

const ContantUs = () => {
  return (
    <section className="contact-us-section container" id="contact-us">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="contact-way">
            <div className="logo">
              <img src={require("../../assets/image/with_text 2.png")} alt="" />
            </div>
            <div className="contact-us-title">
              <p className="fw-600">تماس با ما</p>
            </div>

            <div className="address">
              <h3 className="fw-600">آدرس :</h3>
              <p className="fw-400">
                نیشابور، خیابانطالقانی بعد از طالقانی ۱، خدمات فنی ناصری ساعات
                کاری 8 تا 17
              </p>
            </div>

            <div className="phone">
              <h3 className="fw-600">: شماره تلفن‌های پشتیبانی</h3>
              <div className="naseri">
                <p className="fw-400">ناصری | مدیریت</p>
                <a className="vs-button vs-button--null vs-button--size-null vs-button--primary vs-button--default">
                  <div className="vs-button__content">09155513665</div>
                  <i
                    className="isax isax-call"
                    style={{
                      color: "#fff",
                      fontSize: "1.375rem",
                      transform: "matrix(-1, 0, 0, 1, 0, 0)",
                    }}
                  ></i>
                </a>
              </div>

              <div className="support">
                <p className="fw-400">پشتیبانی</p>
                <a className="vs-button vs-button--null vs-button--size-null vs-button--primary vs-button--default">
                  <div className="vs-button__content">09155513665</div>
                  <i
                    className="isax isax-call"
                    style={{
                      color: "#fff",
                      fontSize: "1.375rem",
                      transform: "matrix(-1, 0, 0, 1, 0, 0)",
                    }}
                  ></i>
                </a>
              </div>
            </div>

            <div className="email">
              <h3 className="fw-600">: از طریق ایمیل</h3>
              <div className="email-info">
                <p className="fw-400">
                  برای ارتباط با واحد روابط عمومی و یا امور همکاری سازمانی،با
                  ایمیل رسمی فروشگاه به نشانی زیر در ارتباط باشید
                </p>
                <button className="vs-button vs-button--null vs-button--size-null vs-button--primary vs-button--default">
                  <div className="vs-button__content">
                    info@naseriservice.ir
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="map">
            <div className="location">
              <MapContainer
                center={[36.19712, 58.78857]}
                zoom={15}
                scrollWheelZoom={false}
                attributionControl={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[36.19712, 58.78857]}>
                  <Popup>خدمات فنی ناصری</Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContantUs;
