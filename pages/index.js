import React from 'react';
import { useThrottle } from 'react-use';

import Layout from 'components/Layout';
import BlockText from 'components/BlockText';
import { useHoveredLink } from 'components/Link';

const IndexPage = () => {
  const [hoveredLink] = useHoveredLink();

  const text = useThrottle(hoveredLink || 'WYATT', 1000);

  return (
    <>
      <BlockText text={text} />
      <div>
        <h1>Personal Site</h1>
      </div>

      <style jsx>{`
        div {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        h1 {
          margin-top: 250px;
          text-transform: uppercase;
          text-align: center;
        }
      `}</style>
    </>
  );
};

IndexPage.getLayout = ({ children }) => (
  <Layout className="layers" noSpacing>
    {children}
  </Layout>
);

export default IndexPage;
