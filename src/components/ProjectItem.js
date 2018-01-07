import React from 'react';
import { Link } from 'react-router-dom';

import AnimatedPage from './AnimatedPage';

export default ({ project: { id, title, desc, download, url, source, no_image } }) => {

  const projectItems = [
    <Link className="goBack" to="/projects">←</Link>,
    <h1>{title}</h1>,
    <p>
      { download ? <a href={download}><i className="fa fa-cloud-download head"/>Download Link</a> : null }
      { url ? <a href={url}><i className="fa fa-link head"/>Live Website</a> : null }
    </p>,
    <p><a href={source}><i className="fa fa-code head"/>Source</a></p>,
    !no_image ? <div className={`image-${id} image`}/> : null,
    <p>{desc.split('\n').map((item, key) => (<span key={key}>{item}<br/></span>))}</p>,
  ];

  return <AnimatedPage items={projectItems} label="project-item" className="content" firstGoLeft dist={24}/>;
};
