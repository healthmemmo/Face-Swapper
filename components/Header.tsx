import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import useRouter hook

export default function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false); // State to manage dropdown visibility
  const router = useRouter(); // Get the router object

  const links = [
    { href: '/', text: 'Home', colorClassName: 'text-black' },
    { href: '/upload', text: 'Upload', colorClassName: 'text-black' },
    { href: '/privacy-policy', text: 'Privacy Policy', colorClass: 'text-gray-500' },
  ];

  return (
      <nav className="border-gray-200 bg-gray-100 px-4 py-2.5 lg:px-6">
        <div className="mx-auto relative  flex flex-wrap items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center mb-4 lg:mb-0">
            <a href="#" className="flex items-center">
              <img src="/logo.png" alt="Logo" width={50} height={50} className="mr-3" />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Face-Mingle
            </span>
            </a>
          </div>

          {/* Dropdown Toggle Button */}
          <button
              className="lg:hidden mb-4 lg:mb-0"
              onClick={() => setDropdownVisible(!isDropdownVisible)}
          >
            ___
          </button>

          {/* Navigation Links */}
          <div className={`flex absolute md:static top-10 z-99 border md:border-none bg-gray-100 border-gray-300 rounded-2xl p-2 md:p-0 right-0 flex-col items-center lg:flex-row lg:items-center ${!isDropdownVisible && 'hidden lg:flex'}`}>
            {links.map((link, index) => (
                <Link href={link.href} key={index}>
                  <p
                      className={`text-sm lg:text-base bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 
                              dark:bg-primary-600 dark:hover:bg-primary-700 
                              dark:focus:ring-primary-800 mb-2 lg:mb-0 lg:mr-2 rounded-lg px-3 py-1  
                              focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5 ${link.colorClassName}
                              ${router.pathname === link.href ? 'font-bold underline' : 'font-semibold'}`}
                  >
                    {link.text}
                  </p>
                </Link>
            ))}
          </div>
        </div>
      </nav>
  );
}
