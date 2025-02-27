import React from 'react';
import Logo from "../../assets/1.jpeg";
import {motion} from 'framer-motion';
import {slideUp} from '../Utility/Animation';

const Cards = () => {
  return (
    <>
    <div className='bg-gray-100'>
    <div className="container py-14">
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
         <motion.div variants={slideUp(0.3)} initial='initial' whileInView='animate' className='bg-white shadow-xl rounded-xl px-5 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto'>
            <img src={Logo} alt='' className='w-16 h-16 rounded-full object-contain p-3 bg-black '/>
            <p className='text-xl'>About</p>
            <p className='text-sm text-black/80 leading-relaxed '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, voluptate?</p>
            <a href='#'>Learn More</a>
         </motion.div>
         < motion.div variants={slideUp(0.6)} initial='initial' whileInView='animate' className='bg-white shadow-md px-5 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto'>
            <img src={Logo} alt='' className='w-16 h-16 rounded-full object-contain p-3 bg-black '/>
            <p className='text-xl'>About</p>
            <p className='text-sm text-black/80'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, voluptate?</p>
            <a href='#'>Learn More</a>
         </motion.div>
         <motion.div variants={slideUp(0.9)} initial='initial' whileInView='animate' className='bg-white shadow-md px-5 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto'>
            <img src={Logo} alt='' className='w-16 h-16 rounded-full object-contain p-3 bg-black '/>
            <p className='text-xl'>About</p>
            <p className='text-sm text-black/80'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, voluptate?</p>
            <a href='#'>Learn More</a>
         </motion.div>
         </div>
         </div>
        
        
    </div>
    </>
  )
}

export default Cards