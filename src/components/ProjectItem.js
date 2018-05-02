import React from 'react';
import { Link } from 'react-router-dom';

import AnimatedPage from './AnimatedPage';

const addIf = (cond, element) => cond ? [ element ] : [];

export default ({ project: { title, desc, download, url, source, image } }) => {

  const projectItems = [
    <Link className="goBack" to="/projects">←</Link>,
    <h1>{title}</h1>,
    ...addIf(download, <p><a href={download}><i className="fa fa-cloud-download head"/>Download Link</a></p>),
    ...addIf(url, <p><a href={url}><i className="fa fa-link head"/>Live Website</a></p>),
    <p><a href={source}><i className="fa fa-code head"/>Source</a></p>,
    ...addIf(image, <div className="image" style={{ backgroundImage: `url("${image}")` }}/>),
    <p>{desc.split('\n').map((item, key) => (<span key={key}>{item}<br/></span>))}</p>,
  ];

  return <AnimatedPage items={projectItems} label="project-item" className="content" firstGoLeft dist={24}/>;
};
