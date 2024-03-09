import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import { FaBars } from 'react-icons/fa6'
import { BiAccessibility } from "react-icons/bi";
import { BiBody } from "react-icons/bi";


const Header = () => {
  return (
    <header className='w-full h-[70px] flex items-center border-b border-zinc-800 bg-zinc-950'>
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-between">
            <Link href="/" className='w-[200px] h-[50px]'>
                <Image fill alt='logo femboyxxx' src='/assets/img/logo.png' width={200} height={50} className='w-full h-full'/>
            </Link>
            <Navbar containerStyle='hidden md:flex ' />
            <div className=''>
                <button className='text-2xl text-white w-[45px] h-[45] flex items-center border border-zinc-500 rounded-md'>
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