import React from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import 'styles/global.scss';

const googleAnalytics =
  process.env.NODE_ENV === 'production' ? 'UA-105229811-1' : null;

const App = ({ Component, pageProps }) => {
  const Layout = Component.getLayout || (({ children }) => children);

  return (
    <>
      <DefaultSeo
        title="Wyatt's Portfolio"
        description="A website for my projects"
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
      />

      <Head>
        {googleAnalytics ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', '${googleAnalytics}', 'auto');ga('send', 'pageview');`,
            }}
          />
        ) : null}
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
