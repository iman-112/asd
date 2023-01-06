import Head from "next/head";
import React from "react";
import Itxidmeti from "../../../components/Services/Itxidmeti";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Kompyuterlər üçün göstərilən  xidmət | CansWeb</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        
      </Head>
      <div className="pt-4">
        <Itxidmeti />
      </div>
    </div>
  );
};

export default Index;
