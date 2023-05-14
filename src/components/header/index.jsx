import React from "react";
import "../header/style.scss";
import { BsTelephone } from "react-icons/bs";
import { TfiLocationPin } from "react-icons/tfi";

const Header = () => {
  return (
    <header>
      <div className="header">
        <div className="row">
          <div className="col-12">
            <div className="full-header container">
              <div className="information">
                <div className="phone">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.82533 5.00817C7.97533 5.2165 8.08366 5.40817 8.15866 5.5915C8.23366 5.7665 8.27533 5.9415 8.27533 6.09984C8.27533 6.29984 8.21699 6.49984 8.10033 6.6915C7.99199 6.88317 7.83366 7.08317 7.63366 7.28317L7.00033 7.9415C6.90866 8.03317 6.86699 8.1415 6.86699 8.27484C6.86699 8.3415 6.87533 8.39984 6.89199 8.4665C6.91699 8.53317 6.94199 8.58317 6.95866 8.63317C7.10866 8.90817 7.36699 9.2665 7.73366 9.69984C8.10866 10.1332 8.50866 10.5748 8.94199 11.0165C9.39199 11.4582 9.82533 11.8665 10.267 12.2415C10.7003 12.6082 11.0587 12.8582 11.342 13.0082C11.3837 13.0248 11.4337 13.0498 11.492 13.0748C11.5587 13.0998 11.6253 13.1082 11.7003 13.1082C11.842 13.1082 11.9503 13.0582 12.042 12.9665L12.6753 12.3415C12.8837 12.1332 13.0837 11.9748 13.2753 11.8748C13.467 11.7582 13.6587 11.6998 13.867 11.6998C14.0253 11.6998 14.192 11.7332 14.3753 11.8082C14.5587 11.8832 14.7503 11.9915 14.9587 12.1332L17.717 14.0915C17.9337 14.2415 18.0837 14.4165 18.1753 14.6248C18.2587 14.8332 18.3087 15.0415 18.3087 15.2748C18.3087 15.5748 18.242 15.8832 18.1003 16.1832C17.9587 16.4832 17.7753 16.7665 17.5337 17.0332C17.1253 17.4832 16.6753 17.8082 16.167 18.0165C15.667 18.2248 15.1253 18.3332 14.542 18.3332C13.692 18.3332 12.7837 18.1332 11.8253 17.7248C10.867 17.3165 9.90866 16.7665 8.95866 16.0748C8.00033 15.3748 7.09199 14.5998 6.22533 13.7415C5.36699 12.8748 4.59199 11.9665 3.90033 11.0165C3.21699 10.0665 2.66699 9.1165 2.26699 8.17484C1.86699 7.22484 1.66699 6.3165 1.66699 5.44984C1.66699 4.88317 1.76699 4.3415 1.96699 3.8415C2.16699 3.33317 2.48366 2.8665 2.92533 2.44984C3.45866 1.92484 4.04199 1.6665 4.65866 1.6665C4.89199 1.6665 5.12533 1.7165 5.33366 1.8165C5.55033 1.9165 5.74199 2.0665 5.89199 2.28317"
                      stroke="#096CF0"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>

                  <a
                    dir="ltr"
                    className="d-inline-block me-2"
                    href="tel:+989306773732"
                  >
                    +989306773732
                  </a>
                </div>
                <div className="location">
                  <i
                    className="isax isax-location"
                    style={{ color: "#096CF0", fontSize: "1.175rem" }}
                  ></i>
                  <a dir="ltr" className="d-inline-block me-2" href="#location">
                    ... نیشابور-خیابان طالقانی
                  </a>
                </div>
              </div>
              <div className="logo">
                <img src={require("../../assets/image/white.png")} alt="" />
              </div>

              <div className="information justify-content-end">
                <div className="phone">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.66699 10.8582V12.4998C1.66699 16.6665 3.33366 18.3332 7.50033 18.3332H12.5003C16.667 18.3332 18.3337 16.6665 18.3337 12.4998V7.49984C18.3337 3.33317 16.667 1.6665 12.5003 1.6665H7.50033C3.33366 1.6665 1.66699 3.33317 1.66699 7.49984"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M9.99967 12.9168C11.6105 12.9168 12.9163 11.611 12.9163 10.0002C12.9163 8.38933 11.6105 7.0835 9.99967 7.0835C8.38884 7.0835 7.08301 8.38933 7.08301 10.0002C7.08301 11.611 8.38884 12.9168 9.99967 12.9168Z"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M14.6971 5.83317H14.7067"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>

                  <a
                    className="d-inline-block me-2"
                    href="tel:+989306773732"
                  ></a>
                </div>
                <div className="location">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="#fff"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.5447 6.21583L8.14187 10.8434C7.72294 11.1059 7.5247 11.6243 7.65966 12.1038L8.4601 14.9583C8.52848 15.2017 8.74188 15.3635 8.98741 15.3635C9.00108 15.3635 9.0149 15.363 9.02875 15.362C9.29123 15.3426 9.49893 15.1442 9.53384 14.8797L9.74197 13.3145C9.77002 13.1039 9.87001 12.908 10.0233 12.7632L16.1322 6.99976C16.3168 6.82602 16.3412 6.54153 16.1891 6.33804C16.0367 6.13437 15.7598 6.0817 15.5447 6.21583ZM9.53479 12.2303C9.26029 12.4896 9.08145 12.8401 9.03125 13.2171L8.93031 13.9763L8.34929 11.9042C8.30207 11.7364 8.37161 11.5549 8.51821 11.463L13.9413 8.07299L9.53479 12.2303Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M19.7072 3.19936C19.4759 3.0004 19.1567 2.94563 18.874 3.05646L2.53017 9.4557C2.20648 9.5824 1.99836 9.89173 2.00001 10.2437C2.0017 10.5961 2.21288 10.9037 2.53846 11.0275L6.35608 12.4736L7.84526 17.3344C7.92704 17.6016 8.13344 17.8092 8.39732 17.8898C8.66106 17.9703 8.9459 17.9127 9.15881 17.736L11.3786 15.8994C11.4852 15.8112 11.6374 15.8068 11.7487 15.8888L15.7524 18.839C15.8964 18.9453 16.0664 19 16.2384 19C16.3391 19 16.4405 18.9812 16.5378 18.9431C16.801 18.8398 16.9924 18.6108 17.0497 18.3306L19.9827 4.01123C20.0443 3.70972 19.9387 3.39865 19.7072 3.19936ZM19.2806 3.86333L16.3476 18.1827C16.3369 18.2344 16.3002 18.256 16.2793 18.2642C16.2582 18.2725 16.2165 18.2817 16.1739 18.2502L12.1701 15.2998C11.9911 15.168 11.7807 15.1025 11.5706 15.1025C11.3414 15.1025 11.1126 15.1804 10.9256 15.3351L8.70533 17.1722C8.66581 17.205 8.62478 17.1991 8.6039 17.1928C8.58288 17.1863 8.54536 17.1681 8.53011 17.1183L6.98868 12.087C6.95574 11.9795 6.87558 11.8935 6.77166 11.8541L2.78969 10.3457C2.73006 10.3231 2.71737 10.2758 2.7172 10.2402C2.71702 10.2049 2.72926 10.1579 2.78832 10.1348L19.1322 3.73555C19.1323 3.73552 19.1324 3.73548 19.1325 3.73545C19.1856 3.71464 19.2248 3.73855 19.2436 3.75461C19.2623 3.77084 19.2922 3.80652 19.2806 3.86333Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M17.0288 10.8624C16.8352 10.8197 16.6443 10.9444 16.6023 11.1408L16.5478 11.3956C16.5058 11.592 16.6286 11.7858 16.8221 11.8285C16.8478 11.8341 16.8733 11.8368 16.8986 11.8368C17.0636 11.8368 17.2122 11.7204 17.2487 11.55L17.3032 11.2953C17.3451 11.0988 17.2223 10.905 17.0288 10.8624Z"
                      fill="#fff"
                    ></path>
                    <path
                      d="M16.6701 12.5389C16.4763 12.4962 16.2856 12.6209 16.2436 12.8173L15.4189 16.6728C15.3769 16.8692 15.4997 17.063 15.6932 17.1056C15.7189 17.1113 15.7444 17.114 15.7696 17.114C15.9347 17.114 16.0832 16.9976 16.1197 16.8272L16.9445 12.9717C16.9865 12.7753 16.8636 12.5815 16.6701 12.5389Z"
                      fill="#fff"
                    ></path>
                  </svg>
                  {/* <i
                    className="isax isax-location"
                    style={{ color: "#096CF0", fontSize: "1.375rem" }}
                  ></i> */}
                  <a
                    dir="ltr"
                    className="d-inline-block me-2"
                    href="#location"
                  ></a>
                </div>

                <div className="location">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0003 1.6665C14.6003 1.6665 18.3337 5.39984 18.3337 9.99984C18.3337 14.5998 14.6003 18.3332 10.0003 18.3332C8.46699 18.3332 7.02533 17.9165 5.78366 17.1915L1.66699 18.3332L2.78368 14.1665C2.07535 12.9415 1.66699 11.5165 1.66699 9.99984C1.66699 6.9165 3.34199 4.22483 5.83366 2.78317"
                      stroke="#fff"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M14.1663 12.6419C14.1663 12.7919 14.133 12.9502 14.058 13.1002C13.983 13.2502 13.8914 13.3919 13.7747 13.5252C13.5664 13.7502 13.3414 13.9169 13.0914 14.0169C12.8414 14.1252 12.5663 14.1752 12.2747 14.1752C11.8497 14.1752 11.3913 14.0752 10.9163 13.8669C10.433 13.6586 9.95801 13.3835 9.48301 13.0419C8.99968 12.6919 8.54967 12.3002 8.11633 11.8752C7.683 11.4419 7.2997 10.9835 6.9497 10.5085C6.60803 10.0335 6.333 9.55855 6.133 9.08355C5.933 8.60855 5.83301 8.15023 5.83301 7.71689C5.83301 7.43356 5.883 7.15856 5.983 6.90856C6.083 6.65023 6.24135 6.4169 6.46635 6.20856C6.73302 5.9419 7.02466 5.81689 7.333 5.81689C7.44966 5.81689 7.56636 5.84189 7.67469 5.89189C7.78303 5.94189 7.883 6.01689 7.958 6.12522L8.92469 7.49188C8.99969 7.60021 9.05799 7.69188 9.09132 7.78355C9.13299 7.87522 9.14966 7.95855 9.14966 8.04188C9.14966 8.14188 9.11634 8.24189 9.058 8.34189C8.99967 8.44189 8.9247 8.54188 8.8247 8.64188L8.50803 8.97521C8.45803 9.02521 8.44135 9.07522 8.44135 9.14189C8.44135 9.17522 8.44969 9.20855 8.45803 9.24188C8.47469 9.27522 8.48301 9.30022 8.49134 9.32522C8.56634 9.46689 8.69965 9.64187 8.88299 9.85854C9.07465 10.0752 9.27469 10.3002 9.49135 10.5169C9.71635 10.7419 9.93301 10.9419 10.158 11.1335C10.3747 11.3169 10.558 11.4419 10.6997 11.5169C10.7247 11.5252 10.7497 11.5419 10.7747 11.5502C10.808 11.5669 10.8413 11.5669 10.883 11.5669C10.958 11.5669 11.008 11.5419 11.058 11.4919L11.3747 11.1752C11.483 11.0669 11.583 10.9919 11.6747 10.9419C11.7747 10.8836 11.8663 10.8502 11.9747 10.8502C12.058 10.8502 12.1413 10.8669 12.233 10.9085C12.3247 10.9502 12.4247 11.0002 12.5247 11.0752L13.908 12.0586C14.0163 12.1336 14.0913 12.2252 14.1413 12.3252C14.1413 12.4252 14.1663 12.5252 14.1663 12.6419Z"
                      stroke="#fff"
                      stroke-miterlimit="10"
                    ></path>
                  </svg>
                  {/* <i
                    className="isax isax-location"
                    style={{ color: "#096CF0", fontSize: "1.375rem" }}
                  ></i> */}
                  <a
                    dir="ltr"
                    className="d-inline-block me-2"
                    href="#location"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
