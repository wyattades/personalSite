import React, { useState } from 'react';
import { useDebounce as useDebounceFn } from 'react-use';

import Layout from 'components/Layout';
import BlockText from 'components/BlockText';
import { useHoveredLink } from 'components/Link';

const useDebounced = (val, wait) => {
  const [v, setV] = useState(val);
  useDebounceFn(() => setV(val), wait, [val]);
  return v;
};

const IndexPage = () => {
  const [hoveredLink] = useHoveredLink();

  const text = useDebounced(hoveredLink || 'WYATT', 600);

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
  <Layout className="index-page" pageClassName="layers" noSpacing>
    {children}
  </Layout>
);

export default IndexPage;
