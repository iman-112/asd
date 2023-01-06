import { useState } from "react"
import Logo from "../ui/Logo"
import {MdInfo, MdSearch} from "react-icons/md"
import Search from "../ui/Search"
import { GiCancel, GiHamburgerMenu } from "react-icons/gi"
import { useRouter } from "next/router"
import Link from "next/link"
import Info from "../ui/Info"
const Header = () => {
const [isInfoModal, setIsInfoModal] = useState(false);
const [isMenuModal, setIsMenuModal] = useState(false);
const [isSearchModal, setIsSearchModal] = useState(false);
const router = useRouter();



  return (
    <div className={`h-[5.5rem] z-50 relative ${router.asPath === "/" ? "bg-transparent " : "bg-boz"}`}   id="main" >
     <div className="container mx-auto  flex justify-between  
      items-center h-full">
       <Logo />
        <nav className={`sm:static absolute 
        top-0 left-0 sm:w-auto sm:h-auto w-full sm:text-white h-screen   sm:bg-transparent bg-boz  sm:flex hidden
        ${isMenuModal === true && " !grid place-content-center "} `}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center justify-end text-white">
          <li className="px-[5px] py-[20px] uppercase  hover:text-sari cursor-pointer">
            <Link href="/" onClick={() => setIsMenuModal(false)} className="text-[15px]">LİNK</Link>
            </li>
            <li className="px-[5px] py-[20px] uppercase  hover:text-sari cursor-pointer" >
            <Link href="/xidmetler  " onClick={() => setIsMenuModal(false)} className="text-[15px]" >LİNK</Link>
            </li>
            <li className="px-[5px] py-[20px] uppercase  hover:text-sari cursor-pointer" >
            <Link href="/haqqimizda" onClick={() => setIsMenuModal(false)} className="text-[15px]">LİNK</Link>
            </li  >
            <li className="px-[5px] py-[20px] uppercase  hover:text-sari cursor-pointer">
            <Link href="/elaqe" onClick={() => setIsMenuModal(false)} className="text-[15px]">LİNK</Link>
            </li>
          </ul>
          {isMenuModal && (
          <button className='absolute  top-4 right-4 rounded-full  transition-all'
          onClick={() => setIsMenuModal(false)}
          >
              <GiCancel size={25} className=' transition-all text-ag hover:text-hover'/>
          </button>
    ) }
        </nav>
        <div className="flex gap-x-4 items-center">
        <button onClick={() => setIsSearchModal(true)}>
            <MdSearch className="hover:text-hover text-sari transition-all cursor-pointer" size={25} />
          </button>
  
          <button onClick={() => setIsInfoModal(true)}>
            <MdInfo className="hover:text-hover text-sari transition-all cursor-pointer" size={25} />
          </button>
          <Link href="/" target="_blank" className="md:inline-block hidden ">
            <button className="btn-primary flex">
              
            Yönləndirmə</button>
          </Link>
          <button className="sm:hidden inline-block" onClick={() => setIsMenuModal(true)}>
            <GiHamburgerMenu  className="text-xl text-ag hover:text-hover transition-all"/>
          </button>
        
        </div>
     </div>
      {isInfoModal &&   (
        <Info setIsInfoModal={setIsInfoModal} />
        
  )}
  {isSearchModal &&   (
        <Search setIsSearchModal={setIsSearchModal} />
        
  )}
     </div>
   
  )
}

export default Header