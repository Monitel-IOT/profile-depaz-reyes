'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'Home',
      url: '/',
    },
    {
      id: 2,
      link: 'Articulos',
      url: '/articulos',
    },
    {
      id: 3,
      link: 'Contacto',
      url: '/contacto',
    },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-20 px-4 text-white bg-black nav">
      <div>
        <h1 className="text-5xl font-signature ml-2">
          <Link className="" href="/">
            <Image src="/logo.png" alt="logo" width={100} height={100} />
          </Link>
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, url }) => (
          <li
            key={id}
            className="
            nav-links px-4 
            cursor-pointer capitalize font-medium 
            link-underline 
            hover:transition 
            ease-in-out 
            delay-150 hover:underline hover:decoration-dorado hover:underline-offset-8"
          >
            <Link href={url}>{link}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-20 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 z-10">
          {links.map(({ id, link, url }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} href={url}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Header;
