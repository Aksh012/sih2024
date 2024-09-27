import React, { useState } from "react";
import Logo from "../image/coerlogo.png";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function Header() {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu toggle

  return (
    <header className="bg-gray-100 h-24 pt-5 shadow-lg p-3 sticky top-0 z-10">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="COER University Logo" className="w-32 md:w-2" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden block text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        {/* Navigation Links (Hidden on small screens, shown on larger screens) */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 text-gray-800 absolute md:static bg-gray-100 w-full md:w-auto left-0 top-12 z-20 shadow-md md:shadow-none md:p-0 p-4`}
        >
          <a
            href="#home"
            className="block md:inline text-center hover:text-blue-600 font-bold py-2"
          >
            Home
          </a>
          <a
            href="#admissions"
            className="block md:inline text-center hover:text-blue-600 font-bold py-2"
          >
            News Letter
          </a>
          <a
            href="#student-life"
            className="block md:inline text-center hover:text-blue-600 font-bold py-2"
          >
            Blogs
          </a>
          <a
            href="#research"
            className="block md:inline text-center hover:text-blue-600 font-bold py-2"
          >
            Alumini
          </a>
          <a
            href="#about"
            className="block md:inline text-center hover:text-blue-600 font-bold py-2"
          >
            Events
          </a>
          <a
            href="#about"
            className="block md:inline text-center hover:text-blue-600 font-bold py-2"
          >
            AI Mentors
          </a>
          <div className=" ml-16">
            <div className=" md:flex items-center space-x-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                SignUp
              </button>

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 px-4 py-3 rounded-md bg-orange-500  text-white  text-sm font-semibold  shadow-sm ring-1 ring-inset ring-white">
                    Login
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 h-5 w-5 text-white"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        Admin Login
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        Faculty Login
                      </a>
                    </MenuItem>
                    <MenuItem>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        Student Login
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </nav>

        {/* Search Box for larger screens */}
      </div>

      {/* Mobile Search Input */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <input
            type="text"
            placeholder="Search COER University's websites"
            className="p-2 rounded-md border border-gray-300 w-full"
          />
        </div>
      )}
    </header>
  );
}

export default Header;
