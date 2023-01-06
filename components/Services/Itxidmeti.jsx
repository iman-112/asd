import Link from 'next/link';
import React from 'react'

import Title from "../../components/ui/Title";
const Itxidmeti = () => {
  return (
  
        <div className="h-full w-full">
          <div className="container mx-auto text-center">
            <Title addClass="p-4 text-[35px] text-primary ">
              HardWare Dəstək{" "}
            </Title>
    
            <div>
              <ul>
                <li>
                  <p className="text-[15px] ">
                  Artıq insanların görə bildikləri bəzi işləri kompyuterlərdə öhdəsindən gələ bilir. Bunlar günü gündən yaxşılaşır və insanların işini asanlaşdırır. Ancaq  kompyuterlərdə sıradan çıxa bilər , proqramı köhnələ bilər , yenilənmək məcburiyyətində qala bilər . Sizlərə kompyuterlərinizdə yaranan problemləri aradan qaldırmaq , onları daha da sürətləndirmək və onları daima işlək vəziyyətdə saxlamaq üçün bu xidməti təklif edirik.
                    , 
                    
                    
                    {" "}
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
              className="p-4 "
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
                      30 AZN - (?) AZN
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
        </div>
 

  )}
export default Itxidmeti