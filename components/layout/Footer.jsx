
import Title from "../ui/Title";


import Link from "next/link";




const Footer = () => {

  return (
    <div className="bg-boz text-md text-[#ccc] ">
      <div className="container mx-auto  pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title addClass="text-[28px]">Bizimlə əlaqə </Title>
            <div className="flex flex-col gap-y-2 mt-4">
            
              <div className="mb-2">
                <i className="fa fa-phone"></i>
                <span className="inline-block ml-2">Tel: +994555555555</span>
              </div>
              <div>
                <i className="fa fa-envelope"></i>
                <span className="inline-block ml-2">info@sizin.adress</span>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[28px] ">
              <span className="text-hover">Sizin</span>
              <span>Logo</span>
               </Title>
            <p className="mt-3">
              Sizin Brendinizin izahı.
              Sizin Brendinizin izahı.

            </p>
           
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[28px]">Qısayollar</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2"><Link href="/"> Giriş səhifəsi </Link></span>
              </div>
              <div>
                <span className="inline-block ml-2"><Link href="/xidmetler"> Xidmətlər </Link></span>
              </div>
              <div>
                <span className="inline-block ml-2"><Link href="/haqqimizda"> Haqqımızda </Link></span>
              </div>
              <div>
                <span className="inline-block ml-2"><Link href="/elaqe"> Müraciət et</Link></span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center text-[12px] mt-10">
          © 2022 - 2023 All Riights Reserved By SizinLOGO
        </p>
      </div>
    </div>
  );
};

export default Footer;