import React from 'react'
import Reservation from '../../components/Reservation'
import Head from 'next/head'

const index = () => {
  return (
    <div>
        <Head>
        <title>Bizimlə əlaqə</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head><Reservation/></div>
  )
}

export default index