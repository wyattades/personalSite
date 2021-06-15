import React from 'react';

const experienceItems = [
  {
    title: 'Vanly',
    link: 'https://vanly.app',
    role: 'Co-founder & CTO',
    from: '2019',
    to: null,
  },
  {
    title: 'Triplebyte',
    link: 'https://triplebyte.com',
    role: 'Full-stack Engineer',
    from: 'April 2019',
    to: 'April 2021',
    desc: [
      'Project lead for the most vital company capstone projects: jobs directory, Triplebyte Screen, profile editor',
      'Added sub 30ms React server-side-rendering system in Rails',
      'Moved all web infastructure and test suites to parallized Docker containers for a tremendous increase in speed, caching and reliability',
    ],
  },
  {
    title: 'Rootid',
    link: 'https://rootid.com',
    role: 'Dev-ops Intern',
    from: '2018',
    to: '2019',
    desc: [
      'Moved to Docker infastructure and created automated integration testing suite for >20 client websites.',
    ],
  },
  {
    title: 'Baskin School of Engineering',
    link: 'https://soe.ucsc.edu',
    role: 'Full-stack Engineer',
    from: '2017',
    to: '2018',
    desc: [
      'Created automated tools for bulk content migration and testing that are still used today to manage hundreds of enterprise Drupal sites',
      'Built reusable web "modules" (interactive building maps and company org charts) used on campus kiosks',
      'Created responsive Drupal CSS theme used on most School of Engineering websites',
    ],
  },
  {
    title: 'MVCode',
    link: 'https://web.archive.org/web/20210127040716/https://www.mvcode.com/',
    role: 'Coordinator and Lead Instructor',
    from: '2015',
    to: '2017',
    desc: [
      'Developed and taught coding and design challenges for teens in JavaScript, HTML/CSS, Arduino, Unity/C#',
      'Clearly communicated with coworkers and parents by documenting performance and progress of students',
      'Managed 3 other instructors at a time',
    ],
  },
];

export const getResumeItems = (maxExperience = null) =>
  [
    <section className="pad-horizontal">
      <ul>
        <li>
          Self-driven full-stack engineer with focus on Progressive Web
          Applications and seamless user experiences
        </li>
        <li>Open-source project contibutor</li>
        <li>
          Builds and researches efficient and modular tooling &amp; practices
        </li>
      </ul>
    </section>,

    <h4 className="text-hr vertical-margin">
      <span>TECHNOLOGIES</span>
    </h4>,

    <section className="pad-horizontal">
      <div className="flex-table">
        <p>
          <span>Expert</span>
          <span>React, Rails, Webpack, Babel, CSS, Node.js</span>
        </p>
        <p>
          <span>Experienced</span>
          <span>PostgreSQL, Docker</span>
        </p>
        <p>
          <span>Always learning</span>
          <span>Rust, AWS</span>
        </p>
      </div>
    </section>,

    <h4 className="text-hr vertical-margin">
      <span>EXPERIENCE</span>
    </h4>,

    <section className="pad-horizontal">
      <div>
        {(maxExperience
          ? experienceItems.slice(0, maxExperience)
          : experienceItems
        ).map((exp, i) => (
          <div className="item" key={i}>
            <p className="item-date">
              {exp.from} - {exp.to || 'Present'}
            </p>
            <p className="item-title">
              <a href={exp.link}>{exp.title}</a>
              <span>{exp.role}</span>
            </p>
            {Array.isArray(exp.desc) && exp.desc.length > 0 ? (
              <ul className="item-desc">
                {exp.desc.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            ) : exp.desc ? (
              <p className="item-desc">{exp.desc}</p>
            ) : null}
          </div>
        ))}
      </div>
    </section>,

    <h4 className="text-hr vertical-margin">
      <span>EDUCATION</span>
    </h4>,

    <section className="pad-horizontal">
      <div>
        <p className="item-date">2015 - 2019</p>
        <p className="item-title">
          <span>University of California, Santa Cruz</span>
          <span>B.S. in Computer Science | Magna Cum Laude</span>
        </p>
        <p className="item-desc">
          Earned "A" grade and had the role of Project Lead in the following
          major programming projects: Web Development Capstone, Software
          Development Practices, Mobile Applications, Artificial Intelligence,
          Natural Language Processing
        </p>
      </div>
    </section>,
  ].map((item, i) => React.cloneElement(item, { key: i }));
