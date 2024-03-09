import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full bg-zinc-950'>
      <div className="container mx-auto">
        <div className="w-full flex items-center justify-between">
            <Link href="/">
                <Image fill alt='logo femboyxxx' src='/assets/img/logo.png' />
            </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
