import React from 'react';
import Tilt from 'react-parallax-tilt';
import { FaWhatsapp } from 'react-icons/fa';
import contactLinks from '../../assets/contactLinks';
import SocialIcon from '../../components/SocialIcon';
import { Container, Row, Col } from 'react-bootstrap';
import { getExperienceYears } from '../../utils/helper';
import avatarImage from '../../assets/images/avatar.png';
import { AiFillMail, AiFillLinkedin, AiOutlineGithub, AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai';

const Introduction = () => {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              LET ME <span className='teal'> INTRODUCE </span> MYSELF
            </h1>
            <ul className='home-about-body'>
              <li>Over <b className='teal'>{getExperienceYears()} years</b> of experience in designing and developing <b className='teal'>scalable web applications</b> using the <b className='teal'>MERN stack.</b></li>
              {/* <br /> */}
              <li>Expertise in building <b className='teal'>dynamic and responsive front-end interfaces</b> with <b className='teal'>React.js, Redux, Redux Toolkit Query, React Router, Material UI (MUI), and React Bootstrap.</b></li>
              {/* <br /> */}
              <li>Proficient in developing <b className='teal'>robust backend services</b> using <b className='teal'>Node.js, Express.js, RESTful APIs, JWT authentication, Bcrypt, Nodemailer, Multer, and Cron Jobs.</b></li>
              {/* <br /> */}
              <li>Skilled in working with <b className='teal'>MongoDB (Mongoose, Aggregation Pipelines) and MySQL</b> for efficient <b className='teal'>data management and optimization.</b></li>
              {/* <br /> */}
              <li>Experienced in <b className='teal'>version control and collaboration</b> using <b className='teal'>Git and GitHub.</b></li>
              {/* <br /> */}
              <li>Strong understanding of <b className='teal'>CI/CD automation with Jenkins</b> and deploying applications on <b className='teal'>AWS, DigitalOcean, Render, and Netlify</b> for secure and high-performance cloud-based solutions.</li>
            </ul>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={avatarImage} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='teal'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <SocialIcon className='icon-colour home-social-icons' link={contactLinks.email} icon={<AiFillMail size='35px' className='social-icon' />} />
              <SocialIcon className='icon-colour home-social-icons' link={contactLinks.linkedin} icon={<AiFillLinkedin size='35px' className='social-icon' />} />
              <SocialIcon className='icon-colour home-social-icons' link={contactLinks.github} icon={<AiOutlineGithub size='35px' className='social-icon' />} />
              <SocialIcon className='icon-colour home-social-icons' link={contactLinks.whatsapp} icon={<FaWhatsapp size='35px' className='social-icon' />} />
              <SocialIcon className='icon-colour home-social-icons' link={contactLinks.facebook} icon={<AiFillFacebook size='35px' className='social-icon' />} />
              <SocialIcon className='icon-colour home-social-icons' link={contactLinks.instagram} icon={<AiOutlineInstagram size='35px' className='social-icon' />} />
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Introduction;