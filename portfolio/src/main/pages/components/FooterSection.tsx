import React from 'react';
import { GithubIcon, LinkedinIcon, LocationIcon, MailIcon, PhoneIcon } from '../../../assets/icons';
import thinRibbon from '../../../assets/icons/thinRibbon.svg';
import butterfly from '../../../assets/icons/butterfly.svg';


const FooterSection = () => {

  const handleEmailClick = () => {
    window.location.href = "mailto:czarinakrisel@gmail.com";
  };

  const handleLocationClick = (location: string) => {
    window.open(`https://www.google.com/maps/search/${encodeURIComponent(location)}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="container mx-auto px-4">
      <div className="divider my-8 mx-auto"></div>
      <div className='my-10 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-10/12 mx-auto'>
        <div className='flex flex-col items-start space-y-2'>
          <div className='flex flex-row gap-2 items-center'>
            <img src={thinRibbon} className='size-6' />
            <h1 className='text-2xl font-bold coquette-font text-rose-300'>Czarina Cuarez</h1>
          </div>
          <p className='text-lg'>Gracefully crafting full-stack solutions to elevate your company’s success.</p>
          <div className='flex gap-3'>
            <a href="https://github.com/czarinacuarez" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <GithubIcon className='size-6 text-rose-200' />
            </a>
            <a href="https://linkedin.com/in/czarinacuarez" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <LinkedinIcon className='size-6 text-rose-200' />
            </a>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center space-y-2'>
            <h2 className='uppercase text-base text-rose-300 font-bold'>Portfolio</h2>
            <div className='items-center flex flex-col gap-2 *:cursor-pointer *:text-sm'>
              <button onClick={() => scrollToSection('home')}>Home</button>
              <button onClick={() => scrollToSection('about')}>About</button>
              <button onClick={() => scrollToSection('experience')}>Experience</button>
              <button onClick={() => scrollToSection('projects')}>Projects</button>
              <button onClick={() => scrollToSection('resume')}>Resume</button>
            </div>
          </div>
        </div>
        <div className='flex flex-col items-end space-y-2'>
          <h2 className='uppercase text-base text-rose-300 font-bold'>Get In Touch</h2>
          <div
            className='flex flex-row gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity'
            onClick={handleEmailClick}
          >
            <div className='bg-rose-50 p-2 rounded-full'>
              <MailIcon className='size-5 text-rose-300' />
            </div>
            <p className='text-sm'>czarinakrisel@gmail.com</p>
          </div>
          <div
            className='flex flex-row gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity'
            onClick={() => handleLocationClick('Bulacan, Philippines')}
          >
            <div className='bg-rose-50 p-2 rounded-full'>
              <LocationIcon className='size-5 text-rose-300' />
            </div>
            <p className='text-sm'>Metro Manila, Philippines</p>
          </div>
          <div
            className='flex flex-row gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity'
            onClick={() => handleLocationClick('Metro Manila, Philippines')}
          >
            <div className='bg-rose-50 p-2 rounded-full'>
              <LocationIcon className='size-5 text-rose-300' />
            </div>
            <p className='text-sm'>San Jose del Monte City, Bulacan, Philippines</p>
          </div>
        </div>
      </div>
      <div className="divider my-8 mx-auto"></div>
      <img src={butterfly} className='size-30 mx-auto' />
      <div className='text-center space-y-4'>
        <p className='text-sm coquette-font font-bold gradient-text'>Like a butterfly, her wings will remain forever unfolded.</p>
        <p className='text-xs'>Copyright © 2025 Czarina Cuarez. All rights reserved.</p>
      </div>
    </div >
  )
}

export default FooterSection;