import React from 'react';

import AnimatedPage from './AnimatedPage';

const contactItems = [
  <h1>Contact</h1>,
  <p><a href="mailto:wyattades@gmail.com"><i className="fa fa-envelope head"/>wyattades@gmail.com</a></p>,
  <h1>Other Links</h1>,
  <p><a href="https://github.com/wyattades"><i className="fa fa-github head"/>github.com/wyattades</a></p>,
  <p><a href="https://linkedin.com/in/wyattades/"><i className="fa fa-linkedin head"/>linkedin.com/in/wyattades</a></p>,
  <p><a href="https://open.spotify.com/user/wyattades"><i className="fa fa-spotify head"/>open.spotify.com/user/wyattades</a></p>,
];

export default () => <AnimatedPage items={contactItems} label="contact" className="content"/>;
