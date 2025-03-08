import React from 'react';

import AboutSection from "./components/AboutSection";
import AchievementsSection from "./components/AchievementsSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import HomeSection from "./components/HomeSection";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from './components/ExperienceSection';

const MainPage = () => {
  return (
    <div >
      <section id="home" className='relative'>
        <HomeSection />
      </section>

      <div className="px-3">
        <section id="about" className='relative' >
          <AboutSection />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="projects" className="min-h-screen">
          <ProjectsSection />
        </section>

        <section id="achievement" className="min-h-screen flex justify-center items-center">
          <AchievementsSection />
        </section>

        <section id="contact" className="min-h-screen flex justify-center items-center">
          <ContactSection />
        </section>


        <section id="footer" className="min-h-screen flex justify-center items-center">
          <FooterSection />
        </section>
      </div>


    </div>
  )
}

export default MainPage;