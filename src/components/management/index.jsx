import React from "react";
import "../management/style.scss";
import "../../assets/style/custom.scss";

const Management = ({data}) => {

  return (
    <section className="manegment-section" id="managment">
      <div className="management-section container">
        <div className="row">
          <div className="col-12">
            <div className="title">
              <h2 className="fw-600">کادر مدیریتی</h2>
            </div>
          </div>

          {data.map((element, key) => (
            <div key={key} className="col-md-6">
              <div className="management-card-body">
                <div className="management-card">
                  <div className="card-image">
                    <img src={element.photo[0]?.url} alt="" />
                  </div>

                  <div className="manager-position">
                    <p className="fw-500">{element.role}</p>
                  </div>

                  <div className="manager-info">
                    <div>
                      <h3 className="fw-500">{element.full_name}</h3>
                      <p className="fw-300">{element.description}</p>
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