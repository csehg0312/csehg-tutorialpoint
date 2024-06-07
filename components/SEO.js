import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website'/>
      <meta property='og:url' content='https://csehg-tutorialpoint.vercel.app/'/>
      <meta property='og:image' content='https://csehg-tutorialpoint.vercel.app/images/python-logo.png'/>
      <meta property='og:image:width' content='1200'/>
      <meta property='og:image:height' content='630'/>
      <meta property='og:image:alt' content='Python Logo'/>
      <meta property='og:image:type' content='image/png'/>
      <meta property='og:site_name' content='Python Tutorial Point' />
      <meta property='og:locale' content='sk_SK'/>
      <meta property='og:creator' content='Gabriel Cseh' />
      <meta property='og:creator:linkedin' content='https://www.linkedin.com/in/dailywithhuncseh-gabor0312/' />
      <meta property='og:creator:github' content='https://github.com/csehg0312' />
      <meta property='og:creator:twitter' content='https://x.com/csehgabor451' />

    </Head>
  );
}
