import * as React from 'react';
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";
import { useActiveSection } from "../../hooks/useActiveSection";
import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo/logo.webp';
import type { Variants } from "motion/react"
import { AboutIcon, ExperienceIcon, HomeIcon, ProjectsIcon, ResumeIcon } from '../../assets/icons';
import resume from '../../assets/resume/Cuarez_Resume.pdf?url';
const navItems = ['home', 'about', 'experience', 'projects'] as const;

interface PathProps {
  d?: string
  variants: Variants
  transition?: { duration: number }
}

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(350, 58%, 71%)"
    strokeLinecap="round"
    {...props}
  />
)

const MenuToggle = ({ toggle, isOpen }: { toggle: () => void; isOpen: boolean }) => (
  <button className="toggle" onClick={toggle}
    aria-label="Toggle navigation menu"
    aria-expanded={isOpen}
    aria-controls="mobile-menu" >
    <svg width="20" height="20" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
)

const NavigationBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  const { t } = useTranslation('translations');
  const activeSection = useActiveSection();
  const [isOpen, setIsOpen] = useState(false)

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

  interface NavButtonProps {
    section: string;
    icon: React.ReactNode;
    onClick: () => void;
    isActive: boolean;
  }


  const NavButton = ({ section, icon, onClick, isActive }: NavButtonProps) => (
    <button onClick={onClick}
      aria-current={isActive ? 'page' : undefined}
      aria-label={t(`titles.${section}`)}>
      <div className={`flex gap-2 align-center rounded-2xl p-2 ${isActive ? 'cutesy-gradient default-shadow *:text-rose-400' : '*:text-rose-300'
        }`}>
        <div className={`${isActive ? 'bg-white' : 'bg-rose-50'} p-3 rounded-xl`}>
          {icon}
        </div>
        <div className='flex-col flex justify-center items-start'>
          <span className='text-sm'>{t(`titles.${section}`)}</span>
          <span className='text-xs'>{t(`navDef.${section}`)}</span>
        </div>
      </div>
    </button>
  );

  const getIcon = (section: string) => {
    const icons = {
      home: <HomeIcon className='size-6' />,
      about: <AboutIcon className='size-6' />,
      experience: <ExperienceIcon className='size-6' />,
      projects: <ProjectsIcon className='size-6' />,
      resume: <ResumeIcon className='size-6' />
    };
    return icons[section as keyof typeof icons];
  };
  return (
    <div>
      <div className='fixed md:hidden  w-full top-0 z-50 flex p-2 justify-between my-2 items-center bg-transparent'>
        <img src={logo} loading="lazy" className='size-16 ' alt="Portfolio Logo"></img>
        <motion.nav
          className=' px-3'
          initial={false}
          animate={isOpen ? "open" : "closed"}
        >
          <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        </motion.nav>
        {/* Add the mobile menu animation */}
      </div>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: {
            opacity: 1,
            scale: 1,
            transition: {
              type: "tween",
              duration: 0.3,
              ease: "easeOut"
            }
          },
          closed: {
            opacity: 0,
            scale: 0.95,
            transition: {
              type: "tween",
              duration: 0.2,
              ease: "easeIn"
            }
          }
        }}
        className={`fixed md:hidden z-50 left-0 right-0 top-[80px] mx-auto w-[90%] max-w-[800px]  lg:hidden ${!isOpen && 'hidden'}`} id="mobile-menu" role="menu"
      >
        <nav className={`flex flex-col gap-2 mobile-nav justify-between  *:text-left  rounded-3xl p-3 max-h-[calc(100dvh-90px)] overflow-y-auto rounded-3xl
        *:rounded-default *:py-2 *:transition-colors *:duration-300 *:hover:active *:focus-visible:active
           ${activeSection === 'home' ? 'home-shadow' : 'default-shadow'}`}>
          {navItems.map((item) => (
            <NavButton
              key={item}
              section={item}
              icon={getIcon(item)}
              onClick={() => scrollToSection(item)}
              isActive={activeSection === item}
            />
          ))}

          <a href={resume} target="_blank"
            rel="noopener noreferrer" className='mx-3 special'>
            <div className='flex gap-2 align-center rounded-2xl *:text-rose-300'>
              <div className='bg-rose-50 p-3 rounded-xl'>
                <ResumeIcon className='size-6' />
              </div>
              <div className='flex-col flex justify-center items-start '>
                <span className='text-sm'>{t('titles.resume')}</span>
                <span className='text-xs'>{t('navDef.resume')}</span>
              </div>
            </div>
          </a>
        </nav>
      </motion.div>

      {/* Container for future desktop-only navigation elements */}

      <div className='fixed hidden p-2 w-full top-0 z-50 lg:flex '>
      </div>
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
        className="fixed top-0 hidden  z-50  md:flex pt-2 w-full  justify-center"
      >
        <img src={logo} loading="lazy" className='size-16' alt="Portfolio Logo - Mobile"></img>
        <nav className={`hidden md:flex main-nav justify-between gap-2 rounded-3xl p-3 *:rounded-default *:py-2 *:transition-colors *:duration-300 *:hover:active *:focus-visible:active ${activeSection === 'home' ? 'home-shadow' : 'default-shadow'}`}>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`${activeSection === item ? `active ${item === 'home' ? 'home-shadow' : 'default-shadow'}` : ''}`}
              aria-current={activeSection === item ? 'page' : undefined}
            >
              {t(`titles.${item}`)}
            </button>
          ))}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className={`${activeSection === 'home' ? 'special-a home-shadow' : 'special-a default-shadow'} flex items-center justify-center px-4`}
            style={{ height: '40px' }} // Match button height
          >
            <span className="flex items-center gap-2">
              <ResumeIcon className="size-5" />
              {t('titles.resume')}
            </span>
          </a>
        </nav>
      </motion.div>
    </div>
  );
};

export default NavigationBar;