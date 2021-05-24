import React from 'react';

import AnimatedPage from './AnimatedPage';
import resumeItems from '../resumeItems';

const resume = '/resume.pdf';

export default () => (
  <AnimatedPage label="about">
    <div className="content" style={{ marginBottom: 0 }}>
      <div className="space-between">
        <h1>About Me</h1>
        <a href={resume}>
          <i className="fa fa-link head" aria-hidden />
          Resume PDF
        </a>
      </div>
    </div>
    {resumeItems}
  </AnimatedPage>
);
