import React from 'react';
import Logo from "../../assets/1.jpeg";
import {motion} from 'framer-motion';
import {slideUp} from '../Utility/Animation';

const Banner = () => {
  return (
    <>
      <div className='container mx-auto px-8 py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 min-h-[600px]'>
          {/* Text Content */}
          <div className='space-y-8 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-10 md:py-0 md:px-0 md:items-start'>
            <motion.h1 variants={slideUp(0.2)} initial='initial' whileInView='animate' className='text-4xl xl:text-5xl font-semibold text-black/80'>
              Design is not what it looks like and feels like.Design is how    
              <span className='text-gray-400 underline'> it works</span>
            </motion.h1>
            <motion.button variants={slideUp(0.3)} initial='initial' whileInView='animate' className='bg-[#B95134] hover:bg-black  text-black hover:text-white duration-300 py-2 px-4 rounded shadow-sm hover:shadow-md'>
               More news
            </motion.button>
            <div className='flex gap-3'>
            <motion.div variants={slideUp(0.6)} initial='initial' whileInView='animate' className='space-2'>
                <p className='font-semibold text-lg'>
                  Design  Tools
                </p>
                <p>
                    Lorem ipsum dolor sit amet.
                </p>
              </motion.div>
              <motion.div variants={slideUp(0.8)} initial='initial' whileInView='animate'  className='space-2'>  
                <p className='font-semibold text-lg'>
                  Design  Tools
                </p>
                <p>
                    Lorem ipsum dolor sit amet.
                </p>
              </motion.div>
              </div>
             </div>

          {/* banner Image Content */}
          <div className='flex justify-center items-center'>
            <motion.img 
            initial ={{
              opacity:0,
              x:100
            }}
            whileInView = {{
              opacity:1,
              x:0
            }}
            transition={{duration:0.5, delay:0.5}}
            src={Logo} alt='' className='w-[80%] md:max-w-[500px] xl:w-[600px],md:!scale-125' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
