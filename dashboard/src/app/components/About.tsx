import React from 'react';
import Section from './Section';
import AboutImage from '../assets/about.svg';

const About: React.FC = () => {
  return (
    <Section
      id="about"
      title="About Us"
      text="ShamzBridge is dedicated to helping businesses and individuals thrive. Our mission is to unlock potential, foster growth, and drive innovation. With expertise and dedication, we deliver solutions that ensure lasting success in today’s dynamic world."
      imageSrc={AboutImage}
      imageAlt="About Us"
      reverse={true}
    />
  );
};

export default About;
