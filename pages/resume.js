import React from 'react';

import { getResumeItems } from 'lib/resumeItems';

const resumeItems = getResumeItems(4);

const ResumePage = () => {
  return (
    <div id="resume-root">
      <section
        className="columns pad-horizontal"
        style={{
          alignItems: 'center',
          paddingTop: '0.5rem',
          paddingBottom: '1rem',
        }}
      >
        <div className="column center-text" style={{ userSelect: 'none' }}>
          <div className="logo">
            <span>W</span>
            <span>A</span>
          </div>
        </div>
        <div className="column-divider" />
        <div className="column center-text">
          <h1>
            <a href="https://wyattades.com">Wyatt Ades</a>
          </h1>
        </div>
        <div className="column-divider" />
        <div className="column center-text">
          <p className="contact-link">
            <a href="mailto:me@wyattades.com">me@wyattades.com</a>
          </p>
          <p className="contact-link">
            <a href="https://github.com/wyattades">github.com/wyattades</a>
          </p>
          <p className="contact-link">
            <a href="https://wyattades.com">wyattades.com</a>
          </p>
        </div>
      </section>
      <h4 className="text-hr vertical-margin" style={{ marginTop: 0 }} />
      {resumeItems}
    </div>
  );
};

export default ResumePage;
