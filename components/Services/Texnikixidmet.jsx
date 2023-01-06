import Link from 'next/link';
import React from 'react'

import Title from "../ui/Title";
const Texnikixidmet = () => {
  return (
  
        <div className="h-full w-full">
          <div className="container mx-auto text-center">
            <Title addClass="p-4 text-[35px] text-primary ">
             Web Saytlara Texniki Xidmət{" "}
            </Title>
    
            <div>
              <ul>
                <li>
                  <p className="text-[15px] ">
                  Veb saytlar hazırlayaraq sektorda adını qazanan CansWeb, veb saytlar hazırlamaqla yanaşı, 
           sizin hazır , tamamlanmamış  veb saytlarınızada texniki dəstək   xidmətləri təqdim edir. Bu xidmətləri sözlə ifadə etsək sizin əlinizdə olan veb saytlarda etmək istədiyiniz dəyişikliklər, əlavə etmək istədiyiniz xidmətlər və s. bu tipli dəyişiklikləri biz sizin üçün edirik.
                  </p>
                </li>
    
                <li>
                  <Title addClass="text-[20px] text-primary p-4">
                    {" "}
                      <hr />
                    </Title>
                </li>
              </ul>
            </div>
            <div
              className=" p-4 "
            >
              <div className="bg-primary rounded-3xl m-auto  h-max hover:scale-100 w-full sm:w-[400px]  cursor-pointer shadow_class transition-all">
                <div className="px-6 py-3 text-white text-start">
                  <h4 className="text-xl font-semibold pb-4 text-center">
                    
                    Standart Paket
                  </h4>
                  <p className="text-[14px]">
                  
                    
                  </p>
                  <div className="flex  flex-col p-4 ">
                    <ul className="list-disc ">
                      <li className="mb-2 font-bold underline">Qiyməti dəqiqləşdirmək üçün zəhmət olmasa göstəriləcək xidməti bizə danışın.</li>
                 
                    </ul>
                    <span className="text-sm my-2 italic text-center font-bold ">
                      Müddət (?) gün
                    </span>
                    <span className="text-sm my-2 text-center font-bold ">
                      50 AZN - (?) AZN
                    </span>
                    <button className='btn-primary  w-max m-auto '>
                        <Link href="https://wa.link/yzxi0t" target="_blank" >
                        Sifariş
                        </Link>  </button>
                  </div>
                </div>
              </div>
              
                
              </div>
            </div>
            <li className="list-none">
              <p className="text-[13px] text-gray-600 italic p-4">
                Veb saytların  düzəliş  mərhələsində sayta bütün lazım olan və
                olmayan məlumatları dəqiqləşdirəcəyik. Bunu etmək üçün nümunə olaraq
                istifadə etdiyiniz saytları təhlil edə bilərik. Bir çox suallara
                cavab verməyə hazır olun, çünki bu cavablar sonradan saytın texniki
                tapşırığı olacaqdır. Texniki tapşırıq bir növ saytın ətraflı təsviri
                kimi də istifadə olunur.
              </p>
            </li>
          </div>
  
 

  )}
export default Texnikixidmet