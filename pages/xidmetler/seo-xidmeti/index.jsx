import Head from 'next/head'
import React from 'react'
import SaytlarinHazirlanmasi from '../../../components/Services/SaytlarinHazirlanmasi'
import Seoxidmeti from '../../../components/Services/Seoxidmeti'

const Index = () => {
  return (
    <div>
    <Head>
       <title>Web Saytlarda SEO Xidməti</title>
       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
     </Head>
   <div className='pt-4'>
     <Seoxidmeti />

     
   </div>
 
   </div>
  )
}

export default Index