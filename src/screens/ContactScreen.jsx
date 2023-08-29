import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiFillMail,
    AiOutlineTwitter,
    AiFillFacebook,
    AiFillInstagram,
    AiFillLinkedin,
  } from "react-icons/ai";
  import { FaWhatsapp } from "react-icons/fa";

import Particle from '../components/Particle';

const ContactScreen = () => {
    return (
        <Container fluid className="contact-section">
            <Particle />
            <Container className='body'>
                <Row className='contact'>
                    <h1 className="mt-2 mb-5">
                        Feel free to <strong className="purple">CONNECT</strong>
                    </h1>
                    <Col key='github' xs={12} md={6} lg={3} xl={3} className="social-icons">
                        <a
                            href="https://github.com/muhammadfaseehbinnaeem"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                        >
                            <AiFillGithub className='social-icon-size' />
                        </a>
                    </Col>
                    <Col key='github' xs={12} md={6} lg={3} xl={3} className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/muhammad-faseeh-bin-naeem-b2b6a91a3/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                        >
                            <AiFillLinkedin className='social-icon-size' />
                        </a>
                    </Col>
                    <Col key='github' xs={12} md={6} lg={3} xl={3} className="social-icons">
                        <a
                            href="mailto:muhammadfaseehbinnaeem6@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                        >
                            <AiFillMail className='social-icon-size' />
                        </a>
                    </Col>
                    <Col key='github' xs={12} md={6} lg={3} xl={3} className="social-icons">
                        <a
                            href="https://twitter.com/mfaseehbinnaeem"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                        >
                            <AiOutlineTwitter className='social-icon-size' />
                        </a>
                    </Col>
                    <Col key='github' xs={12} md={6} lg={3} xl={3} className="social-icons">
                        <a
                            href="https://www.facebook.com/muhammadfaseehbinnaeem6"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                        >
                            <AiFillFacebook className='social-icon-size' />
                        </a>
                    </Col>
                    <Col key='github' xs={12} md={6} lg={3} xl={3} className="social-icons">
                        <a
                            href="https://www.instagram.com/muhammadfaseehbinnaeem"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                        >
                            <AiFillInstagram className='social-icon-size' />
                        </a>
                    </Col>
                    <Col key='github' xs={12} md={6} lg={3} xl={3} className="social-icons">
                        <a
                            href={`https://web.whatsapp.com/send?phone=${encodeURIComponent('923017442932')}`}
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                        >
                            <FaWhatsapp className='social-icon-size' />
                        </a>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default ContactScreen;