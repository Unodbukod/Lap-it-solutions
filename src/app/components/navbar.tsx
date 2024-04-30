'use client'

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "./constants";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from 'react';




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href='/'>
              <Image
                src="/lapit.svg"
                alt="logo"
                width={200}
                height={200}
                className="sm:w-[200px] md:w-[200px]"
                />
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="flex space-x-4">
              <ul className="flex items-center space-x-2 sm:space-x-4 md:space-x-5 xl:space-x-1 -translate-x-10 text-white lg:flex gap-12 ">
                {NAV_LINKS.map((link) => (
                  <li key={link.key}>
                    <Link href={link.href} className="text-[8px] sm:text-sm md:text-base font-semibold hover:text-blue-950 duration-300 transition-all">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-end "><Button className="bg-white text-black hover:text-white text-[18px] font-semibold"><a href="/login/signin">Login</a></Button></div>
            </div>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block text-white hover:text-gray-400 focus:outline-none focus:text-white"
            >
              <Image
                width={20}
                height={20}
                src="/menumobile.svg"
                alt="menumobile"
                />
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                  fill="currentColor"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16ZM4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
                  fill="currentColor"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-800 rounded-md fixed top-0 right-0 w-[150px] h-[380px] z-50">
          <div className="p-4">
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-400 focus:outline-none mt-6"
              >

                <Image
                  width={20}
                  height={20}
                  src="/menumobile.svg"
                  alt="menumobile"
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                  }} />

              </button>
            </div>
            <div className="flex flex-col mt-2 space-y-4 ">
            <ul className="items-centertext-white text-white text-[32px] lg:flex gap-y-28 ">
                {NAV_LINKS.map((link) => (
                  <li key={link.key}>
                    <Link href={link.href} className="text-[18px] sm:text-sm md:text-base font-semibold hover:text-blue-950 duration-300  transition-all">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <a href="/login/signin" className="text-[18px] font-semibold">Login</a>
              </ul>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;





