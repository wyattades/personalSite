import React from 'react';

export default [
  
  <h4 className="text-hr vertical-margin">
    <span>EDUCATION</span>
  </h4>,

  <section className="pad-horizontal">
    <div className="space-between">
      <div>
        <p className="item-date">2015 - Present</p>
        <p className="item-title">
          <span>University of California, Santa Cruz</span>
          <span>3.86 GPA</span>
        </p>
        <p className="item-desc">
          B.S. in Computer Science
        </p>
      </div>
      <div>
        <p className="item-date">Summer 2014</p>
        <p className="item-title">
          <span>COSMOS, University of California, Davis</span>
        </p>
        <p className="item-desc">
          Computers in Biophysics and Robotics
        </p>
      </div>
    </div>
  </section>,

  <h4 className="text-hr vertical-margin">
    <span>EXPERIENCE</span>
  </h4>,

  <section className="pad-horizontal">

    <div>
      <div className="item">
        <p className="item-date">2017 - Present</p>
        <p className="item-title">
          <a href="https://soe.ucsc.edu">UCSC School of Engineering</a>
          <span>Full-Stack Web Developer</span>
        </p>
        <p className="item-desc">
          • Created toolset for migrating hundreds of enterprise sites
          <br/> • Develop PHP/JS web modules e.g. interactive maps, news readers
          <br/> • Perform content audits, refactoring, and themed styling
        </p>
      </div>
      <div className="item">
        <p className="item-date">2015 - 2017</p>
        <p className="item-title">
          <a href="https://www.mvcodeclub.com">MVCode</a>
          <span>Coordinator and Lead Instructor</span>
        </p>
        <p className="item-desc">
          • Teach computer programming languages and concepts: JavaScript, HTML/CSS, Arduino, C#
          <br/> • Monitor performance of instructors
          <br/> • Develop lesson plans and guide students’ learning progress
        </p>
      </div>
      <div className="item">
        <p className="item-date">2011 - 2016</p>
        <p className="item-title">
          <span>Byron Moving and Storage</span>
          <span>Moving Assistant</span>
        </p>
        <p className="item-desc">
          • Maintain records of customer possessions and fees for moving and storage
          <br/> • Create and maintain company website
        </p>
      </div>
    </div>
  </section>,

  <h4 className="text-hr vertical-margin">
    <span>SKILLS</span>
  </h4>,

  <section className="pad-horizontal">
    <div className="flex-table">
      <p><span>Advanced</span><span>React, ES6/HTML/CSS, Node, Webpack, Java</span></p>
      <p><span>Proficient</span><span>Python, C, Bash, PostgreSQL</span></p>
      <p><span>Prior Experience</span><span>AWS hosting, Drupal, PHP, ARM</span></p>
      <p><span>OS</span><span>Linux, Windows, OS X</span></p>
    </div>
  </section>,
  
].map((item, i) => React.cloneElement(item, { key: i }));
