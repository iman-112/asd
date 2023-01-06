import React from "react";
import Title from "../ui/Title";

import Slider from "react-slick";
import {IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
const Customers = () => {

  function NextBtn (props){
  const  { onClick} = props ;
    return(
      <button className="text-dumag absolute -bottom-12 left-1/2 bg-sari flex items-center justify-center w-10 h-10 rounded-full" onClick={onClick}><IoIosArrowForward/></button>

    )
  }
  function PrevBtn (props){
    const  { onClick} = props ;
      return(
        <button className="text-dumag absolute -bottom-12 right-1/2 bg-sari flex items-center justify-center w-10 h-10 rounded-full mr-4 " onClick={onClick}><IoIosArrowBack/></button>
  
      )
    }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slideToShow: 2,
    slidesToScroll: 1,
    autoplay:false,
    autoplaySpeed:3500,
    arrows:true,
    nextArrow: <NextBtn/ >,
    prevArrow: <PrevBtn /> ,
 
  };
  return (
    <div className="container mx-auto mb-20 mt-12 ">
      <Title addClass="text-[30px]  text-center text-ag"> Məlumat Lövhəsi sürüşkən </Title>

      <Slider {...settings}>
        <div className="mx-2">
      <div className="mt-5 mx-2 xs:text-center ">
      <div className="p-6 bg-primary text-boz rounded-[5px]">
      <span className="text-lg font-semibold">1.</span>
        <p className="mt-4">
         Müştərini məlumatlandırmaq.
         Müştərini məlumatlandırmaq.
         Müştərini məlumatlandırmaq.
         Müştərini məlumatlandırmaq.
         Müştərini məlumatlandırmaq.

        </p>
     
     
      </div>
</div>
</div>
<div className="mx-2">
      <div className="mt-5 mx-2 xs:text-center ">
      <div className="p-6 bg-primary  text-boz rounded-[5px]">
      <span className="text-lg font-semibold">2.</span>
        <p className="mt-4">
       
        Müştərini məlumatlandırmaq.
         Müştərini məlumatlandırmaq.
         Müştərini məlumatlandırmaq.
         Müştərini məlumatlandırmaq.
         Müştərini məlumatlandırmaq.

       
        </p>
     
     
      </div>
</div>
</div> 
<div className="mx-2 ">
      <div className="mt-5 mx-2 xs:text-center  ">
      <div className="p-6 bg-primary text-boz rounded-[5px]">
      <span className="text-lg font-semibold">3.</span>
        <p className="mt-4">
         
        Müştərini məlumatlandırmaq.
         Müştərini məlumatlandırmaq.
         Müştərini məlumatlandırmaq.
         Müştərini məlumatlandırmaq.
         Müştərini məlumatlandırmaq.

        </p>
     
     
      </div>
</div>
</div>
<div className="mx-2 ">
      <div className="mt-5 mx-2 xs:text-center  ">
      <div className="p-6 bg-primary h-[140px] text-boz rounded-[5px]">
      <span className="text-lg font-semibold">4.</span>
        <p className="mt-4">
        Müştərini məlumatlandırmaq.
         Müştərini məlumatlandırmaq.
         Müştərini məlumatlandırmaq.
         Müştərini məlumatlandırmaq.
         Müştərini məlumatlandırmaq.

        </p>
     
     
      </div>
</div>
</div>
      </Slider>
    </div>
  );
};

export default Customers;
