import React from "react";
import "../management/style.scss";
import "../../assets/style/custom.scss";

const Management = () => {
  let elements = [
    {
      image: require("../../assets/image/manager1.png"),
      name: "محمدرضا ناصری",
      position: "مدیر عامل",
      expertise:
        "متخصص برد های کامپیوتری و تعمیرات یخچال‌فریزر کولرگازی اسپیلت ماشین لباسشویی اتوماتیک ظرفشویی  گاز‌رومیزی ",
    },
    {
      image: require("../../assets/image/manager2.png"),
      name: "امیرمهدی ناصری",
      position: "مدیریت داخلی",
      expertise:
        "امیرمهدی ناصری کارشناس برد های کامپیوتری و متخصص تعمیرات یخچال‌فریزر  کولرگازی اسپیلت ماشین لباسشویی اتوماتیک",
    },
  ];
  return (
    <section className="manegment-section" id="managment">
      <div className="management-section container">
        <div className="row">
          <div className="col-12">
            <div className="title">
              <h2 className="fw-600">کادر مدیریتی</h2>
            </div>
          </div>

          {elements.map((element, key) => (
            <div key={key} className="col-md-6">
              <div className="management-card-body">
                <div className="management-card">
                  <div className="card-image">
                    <img src={element.image} alt="" />
                  </div>

                  <div className="manager-position">
                    <p className="fw-500">{element.position}</p>
                  </div>

                  <div className="manager-info">
                    <div>
                      <h3 className="fw-500">{element.name}</h3>
                      <p className="fw-300">{element.expertise}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Management;