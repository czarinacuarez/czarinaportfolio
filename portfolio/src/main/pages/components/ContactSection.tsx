import React from 'react';
import { motion } from 'motion/react';
import ShinyButton from '../../../component/ShinyButton/ShinyButton';
import sparkling from '../../../assets/icons/sparklingButterfly.svg';

const ContactSection = () => {
  return (
    <div className="contact-container home-shadow max-w-4xl w-full py-30 mx-auto rounded-default relative">
      <motion.img
        src={sparkling}
        alt="sparkles"
        className="absolute inset-0 m-auto w-80 h-full pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <h1 className="font-bold text-5xl coquette-title darker text-center text-white max-w-xl mx-auto relative z-10">
        Lets turn your ideas into something remarkable
      </h1>
      <div className="flex justify-center relative z-10">
        <ShinyButton className="text-white mt-5 darker">Get In Touch</ShinyButton>
      </div>
      <span className='text-xl text-center text-white font-bold coquette-description darker block mt-5 relative z-10'>
        I am open for freelance, full-time or internship roles.
      </span>
    </div>
  )
}

export default ContactSection;