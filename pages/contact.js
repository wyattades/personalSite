import React from 'react';

import Layout from 'components/Layout';
import AnimatedItems from 'components/AnimatedItems';

const ContactPage = () => {
  return (
    <AnimatedItems className="content">
      <h1>Contact</h1>
      <p>
        <a href="mailto:me@wyattades.com">
          <i className="fa fa-envelope head" aria-hidden />
          me@wyattades.com
        </a>
        <br />
        <br />
      </p>
      <h2>Other Links</h2>
      <p>
        <a href="https://github.com/wyattades">
          <i className="fa fa-github head" aria-hidden />
          github.com/wyattades
        </a>
      </p>
      <p>
        <a href="https://linkedin.com/in/wyattades/">
          <i className="fa fa-linkedin head" aria-hidden />
          linkedin.com/in/wyattades
        </a>
      </p>
      <p>
        <a href="https://open.spotify.com/user/wyattades">
          <i className="fa fa-spotify head" aria-hidden />
          open.spotify.com/user/wyattades
        </a>
      </p>
    </AnimatedItems>
  );
};

ContactPage.getLayout = ({ children }) => <Layout>{children}</Layout>;

export default ContactPage;
