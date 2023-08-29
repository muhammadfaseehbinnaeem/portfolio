import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin
} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={4} className="footer-copywright">
          
        </Col>
        <Col md={4} className="footer-copywright">
          <h3>Copyright &copy; {currentYear} Muhammad Faseeh Bin Naeem</h3>
        </Col>
        <Col md={4} className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/muhammadfaseehbinnaeem"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/muhammad-faseeh-bin-naeem-b2b6a91a3"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:muhammadfaseehbinnaeem6@gmail.com"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/mfaseehbinnaeem"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/muhammadfaseehbinnaeem6"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/muhammadfaseehbinnaeem"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={`https://web.whatsapp.com/send?phone=${encodeURIComponent('923017442932')}`}
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;