import React from 'react';
import SocialIcon from './SocialIcon';
import { FaWhatsapp } from 'react-icons/fa';
import contactLinks from '../assets/contactLinks';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillMail, AiFillLinkedin, AiOutlineGithub, AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  let year = (new Date()).getFullYear();

  return (
    <Container fluid className='footer'>
      <Row>
        <Col md='4' className='footer-copywright'>
          <h3>Developed by Muhammad Faseeh Bin Naeem</h3>
        </Col>
        <Col md='4' className='footer-copywright'>
          <h3>Copyright © {year} MFBN</h3>
        </Col>
        <Col md='4' className='footer-body'>
          <ul className='footer-icons'>
            <SocialIcon style={{ color: 'white' }} link={contactLinks.email} icon={<AiFillMail />} />
            <SocialIcon style={{ color: 'white' }} link={contactLinks.linkedin} icon={<AiFillLinkedin />} />
            <SocialIcon style={{ color: 'white' }} link={contactLinks.github} icon={<AiOutlineGithub />} />
            <SocialIcon style={{ color: 'white' }} link={contactLinks.whatsapp} icon={<FaWhatsapp />} />
            <SocialIcon style={{ color: 'white' }} link={contactLinks.facebook} icon={<AiFillFacebook />} />
            <SocialIcon style={{ color: 'white' }} link={contactLinks.instagram} icon={<AiOutlineInstagram />} />
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;