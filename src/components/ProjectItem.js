import React from 'react';
import { Link } from 'react-router-dom';

import AnimatedPage from './AnimatedPage';

export default ({
  project: { title, desc, download, url, source, image, hideImage },
}) => (
  <AnimatedPage label="project-item" className="content" firstGoLeft dist={24}>
    <Link className="goBack" to="/projects">
      ←
    </Link>
    <h1>{title}</h1>
    {download && (
      <p>
        <a href={download}>
          <i className="fa fa-cloud-download head" aria-hidden />
          Download Link
        </a>
      </p>
    )}
    {url && (
      <p>
        <a href={url}>
          <i className="fa fa-link head" aria-hidden />
          {url.includes('npmjs.com') ? 'NPM Package' : 'Live Website'}
        </a>
      </p>
    )}
    {source && (
      <p>
        <a href={source}>
          <i className="fa fa-code head" aria-hidden />
          Source
        </a>
      </p>
    )}
    {!hideImage && image && (
      <div
        className="image shadowed"
        style={{ backgroundImage: `url("${image}")` }}
      />
    )}
    {Array.isArray(desc) ? desc : desc.split('\n')}
  </AnimatedPage>
);
