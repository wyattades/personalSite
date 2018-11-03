import React from 'react';


export default [

  <section className="pad-horizontal">
    <p>
      • Self-driven programmer with focus on designing Progressive Web Applications
      <br/>• Document and contribute to open-source projects
      <br/>• Passion for modular programming practices
    </p>
  </section>,

  <h4 className="text-hr vertical-margin">
    <span>TECHNOLOGIES</span>
  </h4>,

  <section className="pad-horizontal">
    <div className="flex-table">
      <p><span>Programming</span><span>ES6/HTML/CSS, Node, Java, Python, PHP, C, Bash, SQL</span></p>
      <p><span>Frameworks</span><span>Drupal 7/8, React, Webpack, AWS</span></p>
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
          • Develop toolset for upgrading, migrating, and testing hundreds of enterprise
          Drupal sites
          <br/> • Use progressive web design practices to develop PHP/JS web modules such
          as interactive maps and company org. charts
          <br/>• Create responsive themes spanning all SOE sites by leverging skills
          in SASS and jQuery
          <br/>• Write scripts for bulk refactoring and content adjustments
        </p>
      </div>
      <div className="item">
        <p className="item-date">2015 - 2017</p>
        <p className="item-title">
          <a href="https://www.mvcodeclub.com">MVCode</a>
          <span>Coordinator and Lead Instructor</span>
        </p>
        <p className="item-desc">
          • Developed coding and design challenges for up to 30 students at a time in
          languages such as JavaScript, HTML/CSS, Arduino, Unity/C#
          <br/>• Clearly communicated with coworkers and parents by documenting
          performance and progress of students
          <br/>• Used collaborative and leadership skills to manage up to 3 other instructors
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
        Earned "A" grade and had the role of Project Lead in the major programming
        projects included in the following classes: Web Development (Senior project),
        Software Development Practices, Mobile Applications, Artificial Intelligence,
        Natural Language Processing
      </p>
    </div>
  </section>,
  
].map((item, i) => React.cloneElement(item, { key: i }));
