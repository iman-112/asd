import React, { useState } from "react";
import Input from "./form/Input";
import Title from "./ui/Title";
import { Formik, useFormik } from 'formik';
import { reservationSchema } from "../schema/reservation";
import {BsCheck} from "react-icons/bs"
const Reservation = () => {
  const onSubmit = async( values , actions) =>{
      await new Promise((resolve) => setTimeout(resolve,4000));
      actions.resetForm()
  }



  const { values, errors, touched, handleSubmit, handleChange, handleBlur } =
    useFormik({
      initialValues: {
        fullname: "",
        phoneNumber: "",
        email: "",
        xidmet: "",
        elaveistek: "",
      },
      onSubmit,
      validationSchema: reservationSchema,
    });

  const inputs = [
    {
      id:1,
      name:"fullname",
      type:"text",
      placeholder:"Adiniz",
      value: values.fullname,
      errorMessage: errors.fullname,
      touched: touched.fullname,
    },
    {
      id:2,
      name:"phoneNumber",
      type:"number",
      placeholder:"Telefon Nomresi",
      value: values.phoneNumber,
      errorMessage: errors.phoneNumber,
      touched: touched.phoneNumber,

    },
    {
      id:3,
      name:"email",
      type:"email",
      placeholder:"Elektron adres",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,

    },
    
    {
      id:5,
      name:"elaveistek",
      type:"text",
      placeholder:"Mesaj mətni",
      value: values.elaveistek,
      errorMessage: errors.elaveistek,
      touched: touched.elaveistek,

    },
  ]

const [ isSending , setisSending] = useState(false);
const [ isSend , setisSend ] = useState(false)


const handleClick = () =>{
  setisSending(true);
  setTimeout(() =>{
    setisSending(false);
    setisSend(true)
    setTimeout(() =>{
      setisSend(false)
    }, 1700)
  }, 2000)
} 
  return (
    <div className="container mx-auto py-12">
       <Title addClass="text-[40px] mb-10 text-center text-ag"> Əlaqə </Title>
      <div className="flex justify-between flex-wrap-reverse gap-10" >
      <form onSubmit={handleSubmit} className=" lg:flex-1 w-full">
       
        <div className="flex flex-col gap-y-3 " >
         {inputs.map((input) => (
          <Input key={input.id} {...input} onChange={handleChange} onBlur={handleBlur} />
         ))}
        </div>
        <div className="text-center">
        <button type="submit"  
        className=" gap-[16px] mt-4 bg-sari text-boz hover:bg-ag hover:text-boz border  rounded-lg p-0 w-[260px] h-[65px] text-lg cursor-pointer transition-all "


        disabled= {isSending || isSend}
        onClick={handleClick}
       > <span className="sub-rail"></span>
       <span className="sub-icon"></span>
       <span >
       {
        isSending 
        ? 'Göndərilir....'
        : isSend 
        ?' Uğurla göndərildi  ' 
        : 'İndi göndər'
       } </span>
       
       </button>
       </div>
      </form>
      <div className="lg:flex-1 !h-[384px] w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12155.517707319701!2d49.969335913161366!3d40.38936482486778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2s!4v1673029869593!5m2!1str!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
    
    </div>
  );
};

export default Reservation;
