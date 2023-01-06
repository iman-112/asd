import Head from 'next/head'
import React from 'react'
import ServiceWrapper from '../../components/LinkServices/ServiceWrapper'
import SEO from "@bradgarropy/next-seo"



const Index = () => {
  return (
    <div>
    <Head>
    <SEO title='Rəqəmsal dünyada göstərilən xidmətlər.' description='Biznesinizdə müştəri bazanızı böyütmək , Markanızı dahada iləri səviyyələrə qaldırmaq və ən əsasıda müştəri axtarışına yoxda müştərinin sizi axtarıb tapmasına səbəb yaradın. Bu platformda bu nəticəyə gəlmək dahada ilham vericidir.' keywords={['website', 'sayt hazirlanmasi' , 'saytlarin yigilmasi', 'sayt sifarisi ' ] } icon="/favicon.ico" themeColor="#0A2728"  />

       <meta name="viewport" content="initial-scale=1.0, width=device-width" />

     
     </Head>
   <div className='pt-4'>
 
     <ServiceWrapper />

     
   </div>
 
   </div>
  )
}

export default Index