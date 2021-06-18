import React from 'react';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

import 'styles/global.scss';

const HOST_URL = process.env.HOST_URL;
const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

const App = ({ Component, pageProps }) => {
  const Layout = Component.getLayout || (({ children }) => children);

  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {GA_ID ? (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', '${GA_ID}', 'auto');ga('send', 'pageview');`,
            }}
          />
        ) : null}
      </Head>

      <DefaultSeo
        title="Wyatt Ades - Portfolio"
        description="A website for my projects and contact information"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: HOST_URL,
          site_name: 'Wyatt Ades Portfolio',
          images: [
            {
              url: HOST_URL + '/cover-1200x630.png',
              width: 1200,
              height: 630,
              alt: 'Wyatt Ades portfolio cover',
            },
          ],
        }}
        twitter={{
          handle: '@wyattades',
          cardType: 'summary_large_image',
        }}
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
