import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {slideUp} from '../Utility/Animation';
import {motion} from 'framer-motion';

const Email = () => {
  return (
    <div className='bg-amber-100'>
        <div className="container text-center space-y-10 py-10 ">
            <div className='space-y-4'>
                <motion.p  variants={slideUp(0.2)} initial='initial' whileInView='animate' className='text-3xl md:text-4xl font-bold'>Join our email</motion.p> 
                <motion.p  variants={slideUp(0.4)} initial='initial' whileInView='animate'>Get 20% offer per oder</motion.p>
            </div>
            <div className='space-y-5'>
                <motion.button variants={slideUp(0.5)} initial='initial' whileInView='animate' className='bg-[#B95134] text-black py-2 px-4 rounded shadow-sm hover:shadow-md'>
                 Subscribe
                 </motion.button>
                 <motion.div variants={slideUp(0.6)} initial='initial' whileInView='animate' className='flex flex-row justify-center gap-3'>
                 <FaInstagram />
                 <FaLinkedin />
                 <FaFacebook />
                 </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Email