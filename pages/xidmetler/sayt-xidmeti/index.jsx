import Head from "next/head";
import Script from "next/script";
import React from "react";
import SaytlarinHazirlanmasi from "../../../components/Services/SaytlarinHazirlanmasi";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Sizin Məhsul</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    
      </Head>
     
      <div className="pt-4">
        <SaytlarinHazirlanmasi />
      </div>
    </div>
  );
};

export default Index;
