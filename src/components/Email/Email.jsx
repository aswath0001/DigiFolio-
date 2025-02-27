import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Email = () => {
  return (
    <div>
        <div className="container">
            <div>
                <p className='text-3xl md:text-4xl font-bold'>Join our email</p> 
                <p>Get 20% offer per oder</p>
            </div>
            <div>
                <button className='bg-[#B95134] text-black py-2 px-4 rounded shadow-sm hover:shadow-md'>
                 Subscribe
                 <div>
                 <FaInstagram />
                 <FaLinkedin />
                 <FaFacebook />
                 </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Email