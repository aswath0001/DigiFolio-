import React from 'react';
import Logo from "../../assets/1.jpeg";
import {motion} from 'framer-motion';
import {slideUp} from '../Utility/Animation';

const Hero = () => {
  return (
    <>
      <div className='container mx-auto px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 min-h-[600px]'>
          {/* Text Content */}
          <div className='space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start'>
            <motion.h1 variants={slideUp(0.2)} initial='initial' animate='animate' className='text-4xl xl:text-5xl font-bold'>
              We are committed to elevating your business to new heights of 
              <span className='text-gray-400 underline'> excellence</span>
            </motion.h1>
            <motion.p variants={slideUp(0.5)} initial='initial' animate='animate'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, est! Dolore, sit consequatur ratione ipsum magnam blanditiis. 
              Nisi veritatis dolore iusto at iste quos unde voluptas repellat! Ut, vel officia.
            </motion.p>
            <motion.button variants={slideUp(0.8)} initial='initial' animate='animate' className='bg-gray-900 hover:bg-[#B95134] text-white py-2 px-4 rounded shadow-sm hover:shadow-md'>
              Know more
            </motion.button>
          </div>

          {/* Hero Image Content */}
          <div className='flex justify-center items-center'>
            <motion.img 
            initial ={{
              opacity:0,
              x:100
            }}
            animate = {{
              opacity:1,
              x:0
            }}
            transition={{duration:0.5, delay:0.5}}
            src={Logo} alt='' className='w-[80%] md:max-w-[500px] xl:w-[600px]' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
