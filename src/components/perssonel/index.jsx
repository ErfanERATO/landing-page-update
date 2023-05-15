import React, { useEffect } from "react";
import "../perssonel/style.scss";
import "../../assets/style/custom.scss";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Perssonel = ({ data = [] }) => {
  const [showMore, setShowMore] = useState(true);
  const [serachData, setSerachData] = useState(data);
  const changeFilter = (parametrs) => {
    if (parametrs) {
      var expr = new RegExp(parametrs, "gi");
      setSerachData(data.filter((el) => expr.test(el.full_name)));
    } else {
      setSerachData(data);
    }
  };
  return (
    <>
      <section className="perssenel-section container" id="techneation">
        <div className="row">
          <div className="col-12">
            <div className="title">
              <h2 className="fw-600">پرسنل و تکنسین</h2>
            </div>
            <div
              className="d-flex align-items-center justify-content-center mt-2 search-bar"
              style={{
                marginRight: "10px",
                backgroundColor: "red",
                padding: "4px 10px",
                borderRadius: "50px",
                backgroundColor: "#ffffff",
              }}
            >
              <input
                className="search-input"
                onChange={(e) => changeFilter(e.target.value)}
                placeholder="جست‌و‌جوی تکنسین"
                style={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "#ffffff",
                }}
              />
              <div
                style={{
                  backgroundColor: "#1152a8",
                  borderRadius: "50px",
                  padding: "5px",
                  marginLeft: "-5px",
                }}
                className="align-items-center"
              >
                <AiOutlineSearch
                  style={{
                    fontSize: "1.5rem",
                    color: "#ffffff",
                  }}
                />
              </div>
            </div>
          </div>

          {serachData.map((element, key) => (
            <div key={key} className="col-6 col-lg-3">
              <div
                className={` all-personel ${
                  showMore && key > 3 ? "d-none" : ""
                } `}
              >
                <div className="card-row">
                  <div className="card-body">
                    <div className="card-info">
                      <h3 className="fw-400">{element.full_name}</h3>
                      <p className="fw-300">{element.description}</p>
                    </div>

                    <div className="avatar-image">
                      <div className="avatar">
                        {element.photo && element.photo[0]?.url ? (
                          <img
                            style={{
                              width: "3.125rem",
                              height: "3.125rem",
                              borderRadius: "50%",
                              objectFit: "cover",
                            }}
                            src={element.photo[0]?.url}
                            alt=""
                          />
                        ) : (
                          <FaUser
                            style={{ color: "#62688A26", fontSize: "30px" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="perssenel-section container mt-5">
        {data.length > 4 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="btn btn-lg text-primary "
            style={{ fontSize: "0.95rem" }}
          >
            {!showMore ? <span>نمایش کمتر</span> : <span> نمایش بیشتر</span>}
          </button>
        )}
      </div>
    </>
  );
};

export default Perssonel;
