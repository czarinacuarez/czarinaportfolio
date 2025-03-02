import React from 'react';
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useTranslation } from 'react-i18next';


const NavigationBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  const { t } = useTranslation('translations');
  const activeSection = useActiveSection();

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }

  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      aria-hidden={isHidden}
      variants={{
        hidden: {
          y: "-90%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 z-10 hidden md:flex pt-2 w-full  justify-center"
    >
      <nav className="hidden md:flex justify-between gap-3 rounded-3xl bg-white p-3 *:rounded-xl *:border *:border-gray-200 *:px-7 *:py-2 *:transition-colors *:duration-300 *:hover:bg-gray-200 *:focus-visible:bg-gray-200">
        <button
          onClick={() => scrollToSection('home')}
          className={`${activeSection === 'home' ? 'bg-gray-200' : ''}`}
          aria-current={activeSection === 'home' ? 'page' : undefined}>
          {t('titles.home')}
        </button>
        <button
          onClick={() => scrollToSection('about')}
          className={`${activeSection === 'about' ? 'bg-gray-200' : ''}`}
          aria-current={activeSection === 'about' ? 'page' : undefined}>
          {t('titles.about')}
        </button>
        <button
          onClick={() => scrollToSection('experience')}
          className={`${activeSection === 'experience' ? 'bg-gray-200' : ''}`}
          aria-current={activeSection === 'experience' ? 'page' : undefined}>
          {t('titles.experience')}
        </button>
        <button
          onClick={() => scrollToSection('projects')}
          className={`${activeSection === 'projects' ? 'bg-gray-200' : ''}`}
          aria-current={activeSection === 'projects' ? 'page' : undefined}>
          {t('titles.projects')}
        </button>
        <a href="/resume.pdf" className="bg-gray-200">
          {t('titles.resume')}
        </a>
      </nav>
    </motion.div>
  );
};

export default NavigationBar;