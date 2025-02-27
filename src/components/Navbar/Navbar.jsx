import React from 'react';
import Logo from "../../assets/1.jpeg";
import {motion} from "framer-motion";
import {slideUp} from '../Utility/Animation';
import { slideBottom } from '../Utility/Animation';

const NavbarLinks = [
    { id: 1, title: "About", link: "/" },
    { id: 2, title: "Services", link: "#" },
    { id: 3, title: "Works", link: "#" },
    { id: 4, title: "About Us", link: "#" },
    { id: 5, title: "Contact Us", link: "#" }
];

const Navbar = () => {
  return (
    <>
      <motion.div variants={slideBottom(0.2)} initial='initial' animate='animate'
       className='py-4 container mx-auto px-8 flex justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center gap-1'>
          <img src={Logo} alt='' className='w-[70px]' />
          <p className='font-bold text-2xl'>EXTREME</p>
        </div>

        {/* Link Section */}
        <div className='hidden md:block'>
          <ul className='flex gap-3 xl:gap-7'>
            {NavbarLinks.map((link) => (
              <li key={link.id}>
                <a className='hover:text-[#B95134] uppercase text-sm xl:text-base' href={link.link}>
                  {link.title}
                </a>
              </li>
            ))};
          </ul>
        </div>

        {/* Enquiry Button */}
        <button className='bg-[#B95134] text-white py-2 px-4 rounded shadow-sm hover:shadow-md'>
          Enquiry
        </button>
      </motion.div>
    </>
  );
};

export default Navbar;
