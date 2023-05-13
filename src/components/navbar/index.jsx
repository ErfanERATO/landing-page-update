import React from "react";
import "../navbar/style.scss";
import "../../assets/style/custom.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <div className="logo navbar-logo">
            <img src={require("../../assets/image/white.png")} alt="" />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto"
            onClick={(e) => {
              const element = document.getElementById(e.key);
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Nav.Link href="#about-us">درباره‌ی ما</Nav.Link>
            <Nav.Link href="#brands">برند‌های تحت پوشش</Nav.Link>
            <Nav.Link href="#represents">نمایندگی‌های فعال</Nav.Link>
            <Nav.Link href="#techneation">پرسنل و تکنسین</Nav.Link>
            <Nav.Link href="#managment">کادر مدیریتی</Nav.Link>
            <Nav.Link href="#contact-us">ارتباط با ما</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;