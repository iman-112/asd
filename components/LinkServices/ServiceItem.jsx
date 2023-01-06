

import Image from 'next/image'
import Link from 'next/link'
const ServiceItem = () => {
  return (
    <div className='bg-primary rounded-3xl mb-6'>
       <div className='w-full bg-white border-hover  h-[210px] grid place-content-center rounded-br-[40px] '> 
       <div className=' relative w-56 h-48 bg-white '>
    <Image src="/images/photo.png" alt=" Web Saytlarin Hazirlanmasi  "layout="fill"  className='hover:scale-125 transition-all cursor-pointer ' />
        </div>
       </div>
        <div className='p-[25px] text-white ' >
           <h1 className='text-xl font-semibold pb-4 text-center text-boz'> Sizin Məhsul</h1>
           <p className='text-[15px] text-boz'> Müştəriyə məhsulu qısa məzmun ilə tanıtmaq.Müştəriyə məhsulu qısa məzmun ilə tanıtmaq..</p>  
           <div className='flex justify-between   items-center mt-4'>
            <span className='text-boz'>20 AZN</span>
           <button className='btn-primary '>
            <Link href="/xidmetler/sayt-xidmeti">
            Daha Ətraflı
            </Link>
           </button>
        
         
           </div>
        </div>
    </div>
  )
}

export default ServiceItem