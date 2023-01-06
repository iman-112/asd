
import React from 'react'
import Title from '../ui/Title'
import ServiceItem from './ServiceItem'
import ServiceItemApp from './ServiceItemApp'
import ServiceItemit from './ServiceItemit'
import ServiceItemSeo from './ServiceItemSeo'



const ServiceWrapper = () => {
  return (
    <div className='container mx-auto mb-16'>
        <div className='flex flex-col items-center  w-full'>
        <Title addClass="text-center  uppercase text-[35px] font-bold text-sari py-2 "  > Satışda </Title>
        <div >
            <p className='text-center text-sm text-white px-3'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, doloremque?
            </p>
        </div>
        <div className="mt-10">
        <button className="px-4 py-2 bg-ag rounded-3xl text-boz">
          Hamısı
        </button>
        <button className="px-4 py-2 rounded-3xl text-ag">Seçim 1</button>
        <button className="px-4 py-2  rounded-3xl  text-ag">Seçim 2</button>
        <button className="px-4 py-2  rounded-3xl  text-ag">Seçim 3</button>
      </div>



      
        </div>
       
        <div className='mt-8 grid md:grid-cols-3
        sm:grid-cols-2 grid-cols-1 gap-4'>
            <ServiceItem />
            <ServiceItem />   <ServiceItem />   <ServiceItem />   <ServiceItem />   <ServiceItem />   <ServiceItem />   <ServiceItem />   <ServiceItem />   <ServiceItem />   <ServiceItem />
        </div>
    </div>
  )
}

export default ServiceWrapper