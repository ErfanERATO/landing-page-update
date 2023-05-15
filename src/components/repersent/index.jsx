import React from "react";
import "../repersent/style.scss";
import "../../assets/style/custom.scss";

const Repersent = ({ data = [] }) => {
  return (
    <div className="represent-section" id="represents">
      <div className="row">
        <div className="col-12">
          <div className="title">
            <h2 className="fw-600">نمایندگی‌های فعال</h2>
          </div>
        </div>
      </div>

      <div className="all-represents">
        <div className="container">
          <div className="row ">
            <div className="col-12">
              <div className="first-row">
                {data.slice(0, 4).map((el, key) => {
                  return (
                    <div className="" key={key}>
                      <img src={el.photo[0]?.url} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-12">
              <div className="second-row">
                {data.slice(5, 9).map((el, key) => {
                  return (
                    <div className="" key={key}>
                      <img src={el.photo[0]?.url} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repersent;
