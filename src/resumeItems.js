import React from 'react';

export default [
  <section className="pad-horizontal">
    <p>
      • Self-driven programmer with focus on Progressive Web Applications and
      seamless user experiences
      <br />• Document and contribute to open-source projects
      <br />• Passion for clean and modular programming practices
    </p>
  </section>,

  <h4 className="text-hr vertical-margin">
    <span>TECHNOLOGIES</span>
  </h4>,

  <section className="pad-horizontal">
    <div className="flex-table">
      <p>
        <span>Programming</span>
        <span>ES6/HTML/CSS, Node, Python, Bash, SQL</span>
      </p>
      <p>
        <span>Frameworks</span>
        <span>React, Webpack, AWS, Drupal, Docker</span>
      </p>
      <p>
        <span>OS</span>
        <span>Linux, Windows, OS X</span>
      </p>
    </div>
  </section>,

  <h4 className="text-hr vertical-margin">
    <span>EXPERIENCE</span>
  </h4>,

  <section className="pad-horizontal">
    <div>
      <div className="item">
        <p className="item-date">2019 - Present</p>
        <p className="item-title">
          <a href="https://triplebyte.com">Triplebyte</a>
          <span>Software Engineer</span>
        </p>
      </div>
      <div className="item">
        <p className="item-date">2018 - 2019</p>
        <p className="item-title">
          <a href="https://rootid.com">Rootid</a>
          <span>Full-Stack Development Intern</span>
        </p>
        <p className="item-desc">
          • Create dev-ops toolset for reliable automated updates, visual
          regression, and UX testing across dozens of client websites
        </p>
      </div>
      <div className="item">
        <p className="item-date">2017 - 2018</p>
        <p className="item-title">
          <a href="https://soe.ucsc.edu">UCSC School of Engineering</a>
          <span>Full-Stack Developer</span>
        </p>
        <p className="item-desc">
          • Create toolset for bulk migration, content adjustments, and testing
          used on hundreds of enterprise Drupal sites
          <br /> • Use progressive web design practices to develop web modules
          such as interactive maps and company org charts
          <br />• Create responsive themes spanning all SOE sites by leverging
          styling skills and component architecture
        </p>
      </div>
      <div className="item">
        <p className="item-date">2015 - 2017</p>
        <p className="item-title">
          <a href="https://www.mvcodeclub.com">MVCode</a>
          <span>Coordinator and Lead Instructor</span>
        </p>
        <p className="item-desc">
          • Developed coding and design challenges for up to 30 students at a
          time in languages such as JavaScript, HTML/CSS, Arduino, Unity/C#
          <br />• Clearly communicated with coworkers and parents by documenting
          performance and progress of students
          <br />• Used collaborative and leadership skills to manage up to 3
          other instructors
        </p>
      </div>
    </div>
  </section>,

  <h4 className="text-hr vertical-margin">
    <span>EDUCATION</span>
  </h4>,

  <section className="pad-horizontal">
    <div>
      <p className="item-date">2015 - Present</p>
      <p className="item-title">
        <span>University of California, Santa Cruz</span>
        <span>B.S. in Computer Science | 3.86 GPA</span>
      </p>
      <p className="item-desc">
        Earned "A" grade and had the role of Project Lead in the following major
        programming projects: Web Development Capstone, Software Development
        Practices, Mobile Applications, Artificial Intelligence, Natural
        Language Processing
      </p>
    </div>
  </section>,
].map((item, i) => React.cloneElement(item, { key: i }));
