import React from "react";
import "../perssonel/style.scss";
import "../../assets/style/custom.scss";
import { FaUser } from "react-icons/fa";

const Perssonel = () => {
  let elements = [
    {
      icon: <FaUser style={{color: "#62688A26", fontSize: "30px"}}/>,
      name: "آرمین مقیم",
      position: "تکنسین یخچال فریز ",
    },
    {
      icon: <FaUser style={{color: "#62688A26", fontSize: "30px"}}/>,
      name: "حسن موئمنی",
      position: "تکنسین تخصصی یخچال فریزرهای‌ایرانی ",
    },
    {
      icon: <FaUser style={{color: "#62688A26", fontSize: "30px"}}/>,
      name: "احمد مجردی",
      position: "تکنیسین ظرفشویی و لباسشویی اتوماتیک ",
    },
    {
      icon: <FaUser style={{color: "#62688A26", fontSize: "30px"}}/>,
      name: "سجاد شهری زاد",
      position: "تکنسین لباسشویی اتوماتیک",
    },
  ];
  return (
    <section className="perssenel-section container" id="techneation">
      <div className="row">
        <div className="col-12">
          <div className="title">
            <h2 className="fw-600">پرسنل و تکنسین</h2>
          </div>
        </div>

        {elements.map((element, key) => (
          <div key={key} className="col-6 col-lg-3">
            <div className="all-personel">
              <div className="card-row">
                <div className="card-body">
                  <div className="card-info">
                    <h3 className="fw-400">{element.name}</h3>
                    <p className="fw-300">{element.position}</p>
                  </div>

                  <div className="avatar-image">
                    <div className="avatar">
                      {element.icon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Perssonel;
