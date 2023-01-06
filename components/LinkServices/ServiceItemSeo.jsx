

import Image from 'next/image'
import Link from 'next/link'
const ServiceItemSeo = () => {
  return (
    <div className='bg-primary rounded-3xl mb-6'>
       <div className='w-full bg-white border-hover  h-[210px] grid place-content-center rounded-br-[40px] '> 
       <div className=' relative w-52 h-44 bg-white '>
    <Image src="/images/seo-image.png" alt="Seo Optimizasiyası "layout="fill"  className='hover:scale-125 transition-all cursor-pointer ' />
        </div>
       </div>
        <div className='p-[25px] text-white ' >
           <h1 className='text-xl font-semibold pb-4 text-center'> SEO</h1>
           <p className='text-[15px]'> Axtarış motorunun optimallaşdırılması  saytların axtarış sistemlərində daha çox görünməsi üçün aparılır. Google və digər axtarış sistemlərində daha yaxşı mövqelərdə yerləşdirməklə ziyarətçi sayınızı artıra bilərik.</p>  
           <div className='flex justify-between   items-center mt-4'>
           <button className='btn-primary '>
            <Link href="/xidmetler/seo-xidmeti">
            Daha Ətraflı
            </Link>
           </button>
        
         
           </div>
        </div>
    </div>
  )
}

export default ServiceItemSeo