import React from 'react';

export default [

  <h4 className="text-hr vertical-margin">
    <span>SKILLS</span>
  </h4>,

  <section className="pad-horizontal">
    <div className="flex-table">
      <p><span>Advanced</span><span>React, ES6/HTML/CSS, Progressive Web Apps, Node, Webpack, Java</span></p>
      <p><span>Proficient</span><span>Drupal 7/8, Python, C, Bash, PostgreSQL, AWS, PHP</span></p>
      <p><span>OS</span><span>Linux, Windows, OS X</span></p>
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
          • Created toolset for upgrading, migrating, and testing hundreds of enterprise Drupal sites
          <br/> • Develop heavily used PHP/JS web modules such as interactive maps and company org. charts
          <br/> • Responsive theme creation spanning hundreds of sites
          <br/> • Script bulk refactoring and content adjustments
        </p>
      </div>
      <div className="item">
        <p className="item-date">2015 - 2017</p>
        <p className="item-title">
          <a href="https://www.mvcodeclub.com">MVCode</a>
          <span>Coordinator and Lead Instructor</span>
        </p>
        <p className="item-desc">
          • Improvised coding and design challenges for up to 30 students at a time in languages such as JavaScript, HTML/CSS, Arduino, Unity/C#{/*, as well as lesson plans to guide students' learning*/}
          <br/> • Documented performance and improvement of students for communication with parents
          <br/> • Monitor performance of 3 other instructors at a time
        </p>
      </div>
      <div className="item">
        <p className="item-date">2011 - 2016</p>
        <p className="item-title">
          <span>Byron Moving and Storage</span>
          <span>Moving Assistant</span>
        </p>
        <p className="item-desc">
          • Ensured company organization by recording the status of thousands of customer possessions and fees
          <br/> • Reinitiated web presense by creating and maintaining a modern company website
        </p>
      </div>
    </div>
  </section>,

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
  
].map((item, i) => React.cloneElement(item, { key: i }));
