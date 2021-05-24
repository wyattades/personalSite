import React from 'react';
import Head from 'next/head';

import 'styles/style.scss';

const App = ({ Component, pageProps }) => {
  const Layout = Component.getLayout || (({ children }) => children);

  return (
    <>
      <Head>
        <title>Wyatt's Portfolio</title>
        <meta name="description" content="A website for my projects" />
        {/* <meta name="icon" content="/favicon.ico"/> TODO */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          var googleAnalytics = 'UA-105229811-1' // TODO
        `,
          }}
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
