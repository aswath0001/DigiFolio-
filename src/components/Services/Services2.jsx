import React from 'react';
import Logo from "../../assets/1.jpeg";
import {motion} from 'framer-motion';
import {slideUp} from '../Utility/Animation';

const Services2 = () => {
  return (
    <>
      <div className="container mx-auto px-8 py-12">
        {/* Header Section */}
        <div className='py-20 flex justify-between items-center'>
          <motion.h1 variants={slideUp(0.2)} initial='initial' whileInView ='animate' className='text-4xl xl:text-5xl font-bold max-w-[450px]'>
            One stop for digital {''}
            <span className='text-gray-400 underline'>Services</span>
          </motion.h1>
          <motion.p variants={slideUp(0.4)} initial='initial' whileInView ='animate' className='hidden md:block'>
            Smart solutions for a smarter{""}<br></br>
            <span className='text-gray-400 underline'>future</span>{''}
          </motion.p>
        </div>

        {/* Cards Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 px-8 md:px-0'>
         
          <motion.div initial = {{opacity:0,x:-100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.5,delay:0.5}}
           className='max-w-[300px] mx-auto space-y-4'>
            <img src={Logo} alt='' className='w-14' />
            <p className='uppercase font-semibold text-xl'>Crafting seamless digital experiences</p>
            <p className='text-gray-500 pl-6 border-l-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequatur corrupti, adipisci quidem voluptatum dicta.
            </p>
          </motion.div>
          <motion.div
          initial = {{opacity:0,x:-100}}
          whileInView={{opacity:1, x:0}}
          transition={{duration:0.5,delay:0.2}}
          >
            <img  src={Logo} alt='' className='w-full mx-auto sm:w-[300px]' />
          </motion.div>
          <motion.div variants={slideUp(0.7)} initial='initial' whileInView ='animate' className='max-w-[300px] mx-auto space-y-4'>
            <img src={Logo} alt='' className='w-14' />
            <p className='uppercase font-semibold text-xl'>Crafting seamless digital experiences</p>
            <p className='text-gray-500 pl-6 border-l-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequatur corrupti, adipisci quidem voluptatum dicta.
            </p>
          </motion.div>
          <motion.div variants={slideUp(0.7)} initial='initial' whileInView ='animate' className='max-w-[300px] mx-auto space-y-4'>
            <img src={Logo} alt='' className='w-14' />
            <p className='uppercase font-semibold text-xl'>Crafting seamless digital experiences</p>
            <p className='text-gray-500 pl-6 border-l-2'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consequatur corrupti, adipisci quidem voluptatum dicta.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services2;