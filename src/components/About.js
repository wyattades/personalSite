import React from 'react';

import AnimatedPage from './AnimatedPage';
import resumeItems from '../resumeItems';


const resume = '/resume.pdf';

export default () => (
  <AnimatedPage label="about">
    <div className="content">
      <div className="space-between">
        <h1>About Me</h1>
        <a href={resume}>
          <i className="fa fa-link head"/>
          Resume PDF
        </a>
      </div>
      <p>
        I am currently a full-time CS student with a part-time job developing my
        school's websites. With my spare time, I enjoy tinkering with modern web technologies
        and making intuitive apps. Please contact me for more details!
      </p>
    </div>
    {resumeItems}
  </AnimatedPage>
);
