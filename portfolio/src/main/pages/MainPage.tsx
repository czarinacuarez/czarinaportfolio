import React from 'react';
import {
  AboutSection,
  AchievementsSection,
  ContactSection,
  ExperienceSection,
  FooterSection,
  HomeSection,
  ProjectsSection
} from './components';
import { bubbles, bubblesLeft, bubblesRight, bunny, cherry, strawberry } from '../../assets/designs';


const MainPage = () => {
  return (
    <div >
      <section id="home" className='relative'>
        <HomeSection />
      </section>

      <div className="px-3 min-h-screen overflow-y-hidden overflow-x-hidden">
        <section id="about" className='relative ' >
          <AboutSection />
          <img src={bubbles} alt="bubbles" className="absolute hidden lg:block top-100 -right-80 w-1/2" />

        </section>

      </div>

      <section className='relative'>
        <img
          src={bunny}
          className="absolute hidden lg:block -top-120 z-10 -left-40 w-full lg:max-w-xl max-w-2xl  mx-auto"
          alt="Decorative bunny illustration"
        />
      </section>
      <section id="experience" className='relative min-h-screen overflow-hidden px-3'>

        <ExperienceSection />
        <img
          src={cherry}
          className="absolute hidden lg:block top-0 z-10 -right-50 w-full lg:max-w-xl max-w-2xl  mx-auto"
          alt="Decorative bunny illustration"
        />
      </section>
      <section className='relative'>
        <img
          src={strawberry}
          className="absolute hidden lg:block -top-100 z-10 -left-10 w-full lg:max-w-xl max-w-2xl  mx-auto"
          alt="Decorative bunny illustration"
        />
      </section>

      <section id="projects" className="min-h-screen px-3">
        <ProjectsSection />
      </section>

      <section id="achievement" className="min-h-screen flex justify-center items-center px-3">
        <AchievementsSection />
      </section>

      <section id="contact" className="py-20 flex mx-3 justify-center items-center relative overflow-hidden">
        <img
          src={bubblesLeft}
          className="absolute hidden lg:block -left-60 w-full lg:max-w-4xl   mx-auto"
          alt="Decorative strawberry illustration"
        />
        <div className="relative z-10 rounded-2xl">
          <ContactSection />
        </div>
        <img
          src={bubblesRight}
          className="absolute hidden lg:block   -right-60  w-full lg:max-w-4xl  mx-auto"
          alt="Decorative strawberry illustration"
        />
      </section>

      <section id="footer" className="min-h-screen px-3 flex justify-center items-center">
        <FooterSection />
      </section>


    </div >
  )
}

export default MainPage;