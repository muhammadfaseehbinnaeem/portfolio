import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';
import { getExperienceYears } from '../../utils/helper';

const AboutCard = () => {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <b className='teal'>Muhammad Faseeh Bin Naeem</b> from <b className='teal'> Islamabad, Pakistan.</b>
            <br />
            I have worked for over <b className='teal'>{getExperienceYears()} years</b> as a <b className='teal'>Software Developer</b> at various companies across <b className='teal'>Pakistan and USA</b>, serving industries such as <b className='teal'>healthcare, e-commerce, education, business analysis, and market research.</b> My experience spans diverse sectors, enabling me to build versatile and impactful solutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight className='teal' /> Playing Games
            </li>
            <li className='about-activity'>
              <ImPointRight className='teal' /> Traveling
            </li>
            <li className='about-activity'>
              <ImPointRight className='teal' /> Cricket
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default AboutCard;