import React from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import Title from "./Title";
import { GiCancel} from "react-icons/gi"
import {FaWhatsapp} from "react-icons/fa"
import Link from 'next/link';
import {FiPhoneCall , FiMail} from "react-icons/fi"
const Info = ({setIsInfoModal}) => {
  return (
    <div className='fixed w-screen h-screen  z-50 top-0 left-0 after:content-[" "] after:w-screen after:h-screen after:bg-boz after:absolute after:top-0 after:left-0 first-of-type:h-screen grid after:opacity-60 place-content-center'>
    <OutsideClickHandler onOutsideClick={() => setIsInfoModal(false) }>
    <div className='w-full h-full grid place-content-center relative'>
    <div className="relative z-50 md:w-[600px] w-[370px] bg-ag border p-10 rounded-3xl text-primary">
        <Title addClass="text-[40px] text-center p-5 text-sari"> Əlaqə</Title>
        <div className=" w-full flex flex-col h-max">
        <Link href="/" target="_blank" className='text-center mb-1  rounded-md border-2 p-2 text-white hover:text-sari hover:border-hover bg-boz  transition-all cursor pointer relative '>
        
          <span className='text-[20px] sm:text-[25px] '> 
          <FaWhatsapp className='absolute bottom-3 left-1' /> 
          info </span>
        </Link>
        <Link href="tel:+994" target="_blank"  className='text-center mb-1  rounded-md border-2 p-2 text-white hover:text-sari hover:border-hover bg-boz  transition-all cursor pointer relative '>
          <span className='text-[20px] sm:text-[25px] '>  
          <FiPhoneCall className='absolute bottom-3 left-1' />info </span>
        </Link>
        <Link href="mailto: " target="_blank"  className='text-center mb-1 rounded-md border-2  p-2 text-white hover:text-sari hover:border-hover bg-boz  transition-all cursor pointer relative '>
          <span className='text-[20px] sm:text-[25px] '> 
          <FiMail className='absolute bottom-3 left-1' />  
          info</span>
        </Link>
       
        
        </div>
        <div>
            
            <button className='absolute  top-4 right-4 rounded-full  transition-all'
            onClick={() =>setIsInfoModal(false)}
            >
                <GiCancel size={25} className=' transition-all hover:text-hover text-boz'/>
            </button>
        </div>
  </div>
    </div>
  </OutsideClickHandler>
    </div>
  )
}

export default Info