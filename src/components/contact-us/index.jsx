import React from "react";
import "../contact-us/style.scss";
import "../../assets/style/custom.scss";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { BsFillTelephoneFill } from "react-icons/bs";

const ContantUs = () => {
  return (
    <section className="contact-us-section container" id="contact-us" dir="ltr">
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
                  <a
                    dir="ltr"
                    className="d-inline-block me-2"
                    href="tel:+989306773732"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "0.75rem",
                    }}
                  >
                    +989306773732
                  </a>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.82533 5.00817C7.97533 5.2165 8.08366 5.40817 8.15866 5.5915C8.23366 5.7665 8.27533 5.9415 8.27533 6.09984C8.27533 6.29984 8.21699 6.49984 8.10033 6.6915C7.99199 6.88317 7.83366 7.08317 7.63366 7.28317L7.00033 7.9415C6.90866 8.03317 6.86699 8.1415 6.86699 8.27484C6.86699 8.3415 6.87533 8.39984 6.89199 8.4665C6.91699 8.53317 6.94199 8.58317 6.95866 8.63317C7.10866 8.90817 7.36699 9.2665 7.73366 9.69984C8.10866 10.1332 8.50866 10.5748 8.94199 11.0165C9.39199 11.4582 9.82533 11.8665 10.267 12.2415C10.7003 12.6082 11.0587 12.8582 11.342 13.0082C11.3837 13.0248 11.4337 13.0498 11.492 13.0748C11.5587 13.0998 11.6253 13.1082 11.7003 13.1082C11.842 13.1082 11.9503 13.0582 12.042 12.9665L12.6753 12.3415C12.8837 12.1332 13.0837 11.9748 13.2753 11.8748C13.467 11.7582 13.6587 11.6998 13.867 11.6998C14.0253 11.6998 14.192 11.7332 14.3753 11.8082C14.5587 11.8832 14.7503 11.9915 14.9587 12.1332L17.717 14.0915C17.9337 14.2415 18.0837 14.4165 18.1753 14.6248C18.2587 14.8332 18.3087 15.0415 18.3087 15.2748C18.3087 15.5748 18.242 15.8832 18.1003 16.1832C17.9587 16.4832 17.7753 16.7665 17.5337 17.0332C17.1253 17.4832 16.6753 17.8082 16.167 18.0165C15.667 18.2248 15.1253 18.3332 14.542 18.3332C13.692 18.3332 12.7837 18.1332 11.8253 17.7248C10.867 17.3165 9.90866 16.7665 8.95866 16.0748C8.00033 15.3748 7.09199 14.5998 6.22533 13.7415C5.36699 12.8748 4.59199 11.9665 3.90033 11.0165C3.21699 10.0665 2.66699 9.1165 2.26699 8.17484C1.86699 7.22484 1.66699 6.3165 1.66699 5.44984C1.66699 4.88317 1.76699 4.3415 1.96699 3.8415C2.16699 3.33317 2.48366 2.8665 2.92533 2.44984C3.45866 1.92484 4.04199 1.6665 4.65866 1.6665C4.89199 1.6665 5.12533 1.7165 5.33366 1.8165C5.55033 1.9165 5.74199 2.0665 5.89199 2.28317"
                      stroke="#fff"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>

              <div className="support">
                <p className="fw-400">پشتیبانی</p>
                <a className="vs-button vs-button--null vs-button--size-null vs-button--primary vs-button--default">
                  <a
                    dir="ltr"
                    className="d-inline-block me-2"
                    href="tel:+989306773732"
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "0.75rem",
                    }}
                  >
                    +989306773732
                  </a>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.82533 5.00817C7.97533 5.2165 8.08366 5.40817 8.15866 5.5915C8.23366 5.7665 8.27533 5.9415 8.27533 6.09984C8.27533 6.29984 8.21699 6.49984 8.10033 6.6915C7.99199 6.88317 7.83366 7.08317 7.63366 7.28317L7.00033 7.9415C6.90866 8.03317 6.86699 8.1415 6.86699 8.27484C6.86699 8.3415 6.87533 8.39984 6.89199 8.4665C6.91699 8.53317 6.94199 8.58317 6.95866 8.63317C7.10866 8.90817 7.36699 9.2665 7.73366 9.69984C8.10866 10.1332 8.50866 10.5748 8.94199 11.0165C9.39199 11.4582 9.82533 11.8665 10.267 12.2415C10.7003 12.6082 11.0587 12.8582 11.342 13.0082C11.3837 13.0248 11.4337 13.0498 11.492 13.0748C11.5587 13.0998 11.6253 13.1082 11.7003 13.1082C11.842 13.1082 11.9503 13.0582 12.042 12.9665L12.6753 12.3415C12.8837 12.1332 13.0837 11.9748 13.2753 11.8748C13.467 11.7582 13.6587 11.6998 13.867 11.6998C14.0253 11.6998 14.192 11.7332 14.3753 11.8082C14.5587 11.8832 14.7503 11.9915 14.9587 12.1332L17.717 14.0915C17.9337 14.2415 18.0837 14.4165 18.1753 14.6248C18.2587 14.8332 18.3087 15.0415 18.3087 15.2748C18.3087 15.5748 18.242 15.8832 18.1003 16.1832C17.9587 16.4832 17.7753 16.7665 17.5337 17.0332C17.1253 17.4832 16.6753 17.8082 16.167 18.0165C15.667 18.2248 15.1253 18.3332 14.542 18.3332C13.692 18.3332 12.7837 18.1332 11.8253 17.7248C10.867 17.3165 9.90866 16.7665 8.95866 16.0748C8.00033 15.3748 7.09199 14.5998 6.22533 13.7415C5.36699 12.8748 4.59199 11.9665 3.90033 11.0165C3.21699 10.0665 2.66699 9.1165 2.26699 8.17484C1.86699 7.22484 1.66699 6.3165 1.66699 5.44984C1.66699 4.88317 1.76699 4.3415 1.96699 3.8415C2.16699 3.33317 2.48366 2.8665 2.92533 2.44984C3.45866 1.92484 4.04199 1.6665 4.65866 1.6665C4.89199 1.6665 5.12533 1.7165 5.33366 1.8165C5.55033 1.9165 5.74199 2.0665 5.89199 2.28317"
                      stroke="#fff"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
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
