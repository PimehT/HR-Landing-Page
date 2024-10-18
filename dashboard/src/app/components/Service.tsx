import React from 'react';
import Section from './Section';
import ServiceImage from '../assets/service.svg';

const About: React.FC = () => {
  return (
    <Section
      id="service"
      title="Our Services"
      text="From offering strategic advice to leading projects from start to finish, we elevate your business operations. We empower your teams through skill development and create impactful development initiatives that transform organizations and communities alike."
      imageSrc={ServiceImage}
      imageAlt="Our Services"
    />
  );
};

export default About;
