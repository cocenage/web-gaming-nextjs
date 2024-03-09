import Link from 'next/link';
import React from 'react'

const menuLinks = [
    { label: 'Главная', url: '/' },
    { label: 'about', url: '/about' },
    { label: 'sales', url: '/sales' },
    { label: 'catalog', url: '/catalog' },
    { label: 'contacts', url: '/contacts' },
];

    const Navbar = ({containerStyle} : { containerStyle: string }) => {
  return (
    <nav className={`${containerStyle}`}>
      <menu className="w-full flex item-center justify-center gap-4">
        {menuLinks.map(( item, index) => {
            return (
                <>
                    <li key={index}>
                        <Link href={item.url}>{item.label}</Link>
                    </li>
                </>
            )
        })}


      </menu>
    </nav>
  )
}

export default Navbar
