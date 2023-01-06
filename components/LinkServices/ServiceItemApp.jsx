

import Image from 'next/image'
import Link from 'next/link'
const ServiceItemApp = () => {
  return (
    <div className='bg-primary rounded-3xl mb-6'>
       <div className='w-full bg-white border-hover  h-[210px] grid place-content-center rounded-br-[40px] '> 
       <div className=' relative w-56 h-40  bg-white '>
    <Image src="/images/app-image.png" alt=" Saytlara Texniki Xidmət "layout="fill"  className='hover:scale-125 transition-all cursor-pointer ' />
        </div>
       </div>
        <div className='p-[25px] text-white ' >
           <h1 className='text-xl font-semibold pb-4 text-center'> Texniki Xidmət </h1>
           <p className='text-[15px]'> Veb saytlar hazırlayaraq sektorda adını qazanan CansWeb, veb saytlar hazırlamaqla yanaşı, 
           sizin hazır , tamamlanmamış  veb saytlarınızada texniki dəstək   xidmətləri təqdim edir.</p>  
           <div className='flex justify-between   items-center mt-4'>
           <button className='btn-primary '>
            <Link href="/xidmetler/texniki-xidmet">
            Daha Ətraflı
            </Link>
           </button>
        
         
           </div>
        </div>
    </div>
  )
}

export default ServiceItemApp