import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="az-AZ">
      <Head>
        <link rel="shorcut icon" href="/favicon/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;300&display=swap"
          rel="stylesheet"
        />
       <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
<link href="https://fonts.googleapis.com/css2?family=Anybody:wght@300;400;500;600;700&display=swap" rel="stylesheet" />


      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
