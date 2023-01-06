import Link from 'next/link';
import React from 'react'

import Title from "../../components/ui/Title";
const Seoxidmeti = () => {
  return (
  
        <div className="h-full w-full">
          <div className="container mx-auto text-center">
            <Title addClass="p-4 text-[35px] text-primary ">
              Web Saytlarda Seo Xidməti{" "}
            </Title>
    
            <div>
              <ul>
                <li>
                  <p className="text-[15px] ">
                    <span className="underline text-[16px] font-bold text-primary">
                      SEO
                    </span>{" "}
                    -nun məqsədi sözlərə əsaslanaraq Google-da və ya hədəflənmiş axtarış sistemində veb-saytları yüksək yerlərə yerləşdirməkdir. Daha yüksək yer tutan saytlar daha çox klik alır. Daha çox ziyarətçi hər bir veb-sahibkarı sevindirir, lakin burada ən vacib şey ixtisaslı istifadəçilərin sayıdır. Başqa sözlə, daha çox ziyarətçi əldə etmək üçün deyil, daha çox ixtisaslı ziyarətçi əldə etmək üçün Axtarış Motoru Optimizasiyası etməlisiniz.
                    Düzgün mütəxəssis tapmağınızdan əmin olmağı məsləhət görürük. Çünki şüursuz iş saytınıza ciddi ziyan vura bilər. 
Bu sahədə təcrübəniz yoxdursa, <span className="underline text-[16px] font-bold text-primary">
                      CansWeb
                    </span>{" "} mütəxəssisləri ilə iş birliyinə başlayın. 
                  </p>
                </li>
    
                <li>
                  <Title addClass="text-[20px] text-primary p-4">
                    {" "}
                      <hr  />
                  </Title>
                </li>
              </ul>
            </div>
            <div
              className="p-4 "
            >
              <div className="bg-primary w-full sm:w-[500px] rounded-3xl h-max  m-auto hover:scale-100 cursor-pointer shadow_class transition-all">
                <div className="px-6 py-3 text-white text-center">
                  <h4 className="text-xl font-semibold pb-4 text-center">
                    
                    SEO Xidmət Paketi
                  </h4>
                  <p className="text-[14px]">
                  
                  Yaxşı SEO keyfiyyət xalını artırır və Google ADS kampaniyalarına kömək edir. Bu, klik və kampaniya üzrə ümumi xərcləri azaldacaq, həmçinin uğur şansınızı artıracaq.
                  </p>
                  <br />
                  <hr />
                  <div className="flex  flex-col p-4  text-start">
                    <ul className="list-disc ">
                    <li className="mb-2">Daha yaxşı performans üçün ilk öncə Başlıq və Açıqlamada düzəliş .</li>
                    <li className="mb-2">Razılıqınızla ,yazılmış kodlara nəzər salmaq və yaxşılaşdırmaq.</li>
                      <li className="mb-2">Hər səhifə üçün unikal başlıq və təsvir etiketindən istifadə.</li>
                      <li className="mb-2">Başlıq etiketlərindən (H1-H6) müvafiq şəkildə istifadə.</li>
                      <li className="mb-2">Şəkil optimallaşdırmasını, təsvirin URL istifadəsini və ALT teqlərini optimallaşdırmaq.</li>
    
                      <li className="mb-2"> Mobildə uyğunluq testləri və aradan qaldırılması.(Resposinve Design)</li>
    
                      <li className="mb-2"> Web saytınızın sürətli yüklənməsi üçün optimizasiyalar.</li>
                    </ul>
                    <span className="text-sm my-2 italic text-center font-bold ">
                      Müddət 2 - 4 gün
                    </span>
                    <span className="text-sm my-2 text-center font-bold ">
                      100 AZN - 300 AZN
                    </span>
                    <button className='btn-primary  w-max m-auto'>
                        <Link href="https://wa.link/i09v8q" target="_blank" >
                        Sifariş
                        </Link>  </button>
                  </div>
                </div>
              </div>
             
             
            </div>
            <li className="list-none">
              <p className="text-[13px] text-gray-600 italic p-4">
                
               Axtarış Motorunun Optimizasiyası prosesi haqqında vacib məlumatları çatdırmaq istərdik.
               SEO “müraciət et və tərk et” biznes növü deyil. Ziyarətçilərinizə mütəmadi olaraq təzə, unikal məzmun təqdim etməlisiniz. Nəticələrə təsir edə biləcək bir çox amil var. Bu amillər daim dəyişir.  Bu bir oyundur. Bu oyunun qaydaları var və qaydalar Google axtarış sistemi tərəfindən müəyyən edilir. Oyunu qaydalara uyğun oynasanız, mükafatlandırılacaqsınız. Bu mükafat uzunmüddətlidir.
              </p>
            </li>
          </div>
        </div>
 

  )}
export default Seoxidmeti