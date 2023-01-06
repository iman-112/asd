import Head from 'next/head'
import React from 'react'
import Texnikixidmet from '../../../components/Services/Texnikixidmet'


const Index = () => {
  return (
    <div>
    <Head>
       <title>Web Saytlara Texniki Xidmet Göstərilməsi| CansWeb</title>
       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     

     </Head>
   <div className='pt-4'>
     <Texnikixidmet />

     
   </div>
 
   </div>
  )
}

export default Index