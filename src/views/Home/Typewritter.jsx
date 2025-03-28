import React from 'react';
import Typewriter from 'typewriter-effect';

const Typewritter = () => {
  return (
    <div className='typewriter'>
      <Typewriter
        options={{
          strings: ['Full Stack Software Developer working on JavaScript, React.js, Node.js, Express.js, Relational & Non-Relational Database'],
          autoStart: true,
          loop: true,
          delay: 5,
          pauseFor: 1500,
          deleteSpeed: 15,
        }}
      />
    </div>
  );
};

export default Typewritter;