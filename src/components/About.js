import React from 'react';

import AnimatedPage from './AnimatedPage';
import resumeItems from '../resumeItems';


const resume = '/resume.pdf';

const items = [

  <div className="content space-between">
    <h1>About Me</h1>
    <a href={resume}><i className="fa fa-link head"/>Resume PDF</a>
  </div>,

  <p className="content">
    I am currently a full-time CS student with a part-time job working on
    my school's website. With my spare time, I enjoy tinkering with modern web technologies
    and making intuitive apps. Please contact me for more details!
  </p>,

  ...resumeItems,
];

export default () => <AnimatedPage items={items} label="about"/>;
