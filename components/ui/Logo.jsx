
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <div className="flex relative font-anybody">
          <div className="flex flex-col relative">
            {/* <span className=" text-[10px]  font-josephin px-7 tracking-widest absolute -bottom-2 underline uppercase ">
              Sizin Brend
            </span> */}

            <span
              className="
      text-[30px] text-dumag font-bold 
      "
            >
              Sizin
              <span className="text-ag">LOGO</span>
            </span>
          </div>
         

         
        </div>
      </Link>
    </>
  );
};

export default Logo;
