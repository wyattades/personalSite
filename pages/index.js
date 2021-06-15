import React, { useState } from 'react';

import Layout from 'components/Layout';
import BlockText from 'components/BlockText';
import { useHoveredLink } from 'components/Link';
import useDebounce from 'react-use/lib/useDebounce';

const IndexPage = () => {
  const [text, setText] = useState(null);
  const [hoveredLink] = useHoveredLink();
  useDebounce(
    () => {
      setText(hoveredLink || 'WYATT');
    },
    300,
    [hoveredLink],
  );

  return (
    <>
      <BlockText text={text} />
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
