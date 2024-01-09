"use client"



import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const onScroll = () => {
      const currentPosition = window.scrollY;

      setScrolling(currentPosition > scrollTop);
      setScrollTop(currentPosition);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [scrollTop]);

  

  return (
    <nav className={`fixed w-full bg-opacity-0 p-4 transition-transform ${
      scrolling ? '-translate-y-full' : 'translate-y-0'
    } p-6 z-10`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Your Logo
        </Link>

        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        <div
          className={`lg:flex flex-grow items-center ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link
                href="/"
                className="px-4 py-2 text-white hover:text-gray-300"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className="px-4 py-2 text-white hover:text-gray-300"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/"
                className="px-4 py-2 text-white hover:text-gray-300"
              >
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/"
                className="px-4 py-2 text-white hover:text-gray-300"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/"
                className="px-4 py-2 text-white hover:text-gray-300"
              >
                Poultry
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
