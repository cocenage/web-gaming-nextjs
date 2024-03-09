import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import NavbarMobile from '../NavbarMobile/NavbarMobile'
import { FaBars } from 'react-icons/fa6'
import { BiAccessibility } from "react-icons/bi";
import { BiBody } from "react-icons/bi";




const Header = () => {

    const [ openNav, setOpenNav ] = useState(false);

  return (
    <header className='w-full h-[70px] flex items-center border-b border-zinc-800 bg-zinc-950'>
      <div className="container mx-auto flex items-center">
        <div className="relative w-full h-full flex items-center justify-between">
            <Link href="/" className='w-[200px] h-[50px]'>
                <Image fill alt='logo femboyxxx' src='/assets/img/logo.png' width={200} height={50} className='w-full h-full'/>
            </Link>
            <NavbarMobile containerStyle='fixed w-full top-[71] left-0 right-0 p-[15px] max-h-max transition-all bg-zinc-900 md:hidden'/>
            <Navbar containerStyle='hidden md:flex ' />
            <div className=''>
                <button onClick={() => setOpenNav(!openNav)} className='text-xl text-white w-[45px] h-[45] flex items-center border border-zinc-500 rounded-md md:hidden'>
                    <BiAccessibility />
                </button>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
//<BiAccessibility /> <BiBody />