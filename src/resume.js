import ReactDOM from 'react-dom';
import React from 'react';

import './styles/resume.scss';
import resumeItems from './resumeItems';

const App = () => (
  <>
    <section className="columns">
      <div className="column center-text vertical-margin">
        <div className="logo">
          <span>W</span>
          <span>A</span>
        </div>
      </div>
      <div className="column-divider" />
      <div className="column center-text vertical-margin">
        <br />
        <h1>
          <a href="https://wyattades.com">WYATT ADES</a>
        </h1>
      </div>
      <div className="column-divider" />
      <div className="column center-text vertical-margin">
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
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
