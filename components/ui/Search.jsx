import Image from "next/image";
import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "./Title";
import { GiCancel } from "react-icons/gi";

const Search = ({ setIsSearchModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center">
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center relative">
          <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 p-10 rounded-3xl">
            <Title addClass="text-[40px] text-center text-sari">Axtarış</Title>
            <input
              type="text"
              placeholder="Axtarış..."
              className="border border-boz w-full my-10 p-2"
            />
            <ul>
              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image src="/images/photo.png" alt="" width={48} height={48} />
                </div>
                <span className="font-bold">Məhsul1</span>
                <span className="font-bold">AZN 10</span>
              </li>
              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image src="/images/photo.png" alt="" width={48} height={48} />
                </div>
                <span className="font-bold">Məhsul2</span>
                <span className="font-bold">AZN 20</span>
              </li>
              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all">
                <div className="relative flex">
                  <Image src="/images/photo.png" alt="" width={48} height={48} />
                </div>
                <span className="font-bold">Məhsul3</span>
                <span className="font-bold">AZN 40</span>
              </li>
            </ul>
            <button
              className="absolute  top-4 right-4"
              onClick={() => setIsSearchModal(false)}
            >
              <GiCancel size={25} className=" transition-all hover:text-hover text-boz" />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;