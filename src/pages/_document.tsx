import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="description" content="welcome my portfolio, my name's Roger Fernandes" />
        <meta name="keywords"
          content="roger, roger fernandes, portfolio, 
            portfolio developer, front end developer, front end, webdesign
            developer, E-commerce, SEO, Marketing digital" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" 
          content="Roger Fernandes Developer - webdesign, front end developer, roger fernandes, portfolio, 
          portfolio developer" />
        <meta property="og:description" content="my personal page, using NextJS, TailwindCss and Typescript " />
        <meta property="og:image" content="welcome my portfolio" />
        <meta property="og:url" content="https:rogerfernandesdeveloper.vercel.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="../../public/photo_2.jpg" />
        <meta name="twitter:title" content="Portfolio Roger Fernandes - Roger Fernandes Developer - webdesign, front end developer, roger fernandes, portfolio, 
          portfolio developer" />
        <meta name="twitter:description" content="welcome my portfolio, my name's Roger Fernandes" />
        <meta name="twitter:image" content="../../public/photo_2.jpg" />
        <meta name="twitter:url" content="https:rogerfernandesdeveloper.vercel.app" />
        <meta property="fb:admins" content="100091753280136" />
        <meta property="fb:app_id" content="100091753280136" />
        <meta property="og:url" content="https://www.facebook.com/profile.php?id=100091753280136" />
        <meta property="og:type" content="article" />
        <meta property="linkedin:company" content="My personal page" />
        <meta property="linkedin:group" content="https://www.linkedin.com/in/roger-fernandes-garcia-de-sousa-5a0bb214b/" />
        <meta name="linkedin:owner" content="https://www.linkedin.com/in/roger-fernandes-garcia-de-sousa-5a0bb214b/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
