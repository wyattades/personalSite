import React from 'react';

import Layout from 'components/Layout';
import BlockText from 'components/BlockText';

const IndexPage = () => {
  return (
    <>
      <BlockText text="WYATT" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 style={{ marginTop: 250, textTransform: 'uppercase' }}>
          Personal Site
        </h1>
      </div>
    </>
  );
};

IndexPage.getLayout = ({ children }) => (
  <Layout className="layers" noSpacing>
    {children}
  </Layout>
);

export default IndexPage;
