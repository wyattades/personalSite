import React from 'react';

import resumeItems from 'lib/resumeItems';
import Layout from 'components/Layout';
import AnimatedItems from 'components/AnimatedItems';

const AboutPage = () => {
  return (
    <AnimatedItems>
      <div className="content" style={{ marginBottom: 0 }}>
        <div className="space-between">
          <h1>About Me</h1>
          <a href="/resume.pdf">
            <i className="fa fa-link head" aria-hidden />
            Resume PDF
          </a>
        </div>
      </div>
      {resumeItems}
    </AnimatedItems>
  );
};

AboutPage.getLayout = ({ children }) => <Layout>{children}</Layout>;

export default AboutPage;
