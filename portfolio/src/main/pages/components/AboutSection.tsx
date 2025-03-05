import React from 'react';
import me from "../../../assets/img/me.webp"
import { GithubIcon, LinkedinIcon } from '../../../assets/icons';
import OutlineButton from '../../../component/OutlineButton/OutlineButton';
import butterflyRibbon from "../../../assets/icons/butterflyRibbon.svg";

const AboutSection = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col gap-2 md:gap-5 md:flex-row items-center justify-center px-4 md:px-8">
        <div className="w-full md:w-1/2 max-w-xl">
          <img src={me} className='me-image w-full' alt="Czarina Cuarez" />
        </div>
        <div className="w-full md:w-1/2 max-w-xl space-y-4 text-start px-4 md:px-0">
          <p className="font-straight text-sm uppercase font-bold text-rose-300">ABOUT ME</p>
          <h2 className="text-5xl font-normal font-straight">Hi, Im
            <span className="text-rose-300 coquette-font font-bold"> Czarina Cuarez</span>
          </h2>
          <p className=" text-base">
            I am an aspiring
            <span className='coquette-font font-bold text-rose-300 text-xl'> full-stack developer </span>
            who currently sets her new foot unto the workplace.

            <br></br><br></br>
            My passion for software development—and
            <span className='coquette-font font-bold text-rose-300 text-xl'> a love for
              all things pink </span>
            —drives me to continuously learn and grow in this exciting field.
          </p>
          <div className='flex gap-3'>
            <GithubIcon className='size-6'></GithubIcon>
            <LinkedinIcon className='size-6'></LinkedinIcon>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center px-8">
        <img src={butterflyRibbon}></img>
        <p className="font-straight text-sm uppercase font-bold my-4 text-center">CURRENTLY, I’M WORKING WITH THES E TOOLS TO improve in my</p>
        <h2 className="text-5xl text-rose-300 coquette-font font-bold">
          Tech Stack
        </h2>
        <div className=''>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2 text-lg text-gray-800 lg:gap-4">
            <OutlineButton>JavaScript</OutlineButton>
            <OutlineButton>TypeScript</OutlineButton>
            <OutlineButton>React</OutlineButton>
            <OutlineButton>TypeScript</OutlineButton>
            <OutlineButton>TypeScript</OutlineButton>
            <OutlineButton>TypeScript</OutlineButton>
            <OutlineButton>TypeScript</OutlineButton>
            <OutlineButton>TypeScript</OutlineButton>
            <OutlineButton>TypeScript</OutlineButton>
            <OutlineButton>TypeScript</OutlineButton>
            <OutlineButton>TypeScript</OutlineButton>
            <OutlineButton>Node.js</OutlineButton>
            <OutlineButton>TailwindCSS</OutlineButton>
            <OutlineButton>MongoDB</OutlineButton>
            <OutlineButton>Git</OutlineButton>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AboutSection;