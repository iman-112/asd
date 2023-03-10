import Head from "next/head";
import SEO from "@bradgarropy/next-seo"

import Home from "./home";

export default function Index() {
  return (
    <>
      <Head>
      
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
  
 
      </Head>

      <Home />
    </>
  );
}
