import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/heroImage.png";
import navIcon1 from "../assets/img/linkedin (1).png";
import navIcon2 from "../assets/img/github.png";
import navIcon3 from "../assets/img/email.png";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sayali-zambre-a21690242/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/SayaliZambre"><img src={navIcon2} alt="Icon" /></a>
              <a href="mailto:zambresayali6@gmail.com"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}