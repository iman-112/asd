import React from 'react'
import About from '../../components/ui/About'
import Head from 'next/head'



const index = () => {
  return (
    <div>
         <Head>
        <title>Biz Kimik ? Nə təklif edirik?</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
       
      </Head>
    

      
        <About />
        
    </div>
  )
}

export default index