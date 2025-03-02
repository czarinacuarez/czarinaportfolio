import { useEffect, useState } from 'react';
import type { SectionName } from '../types/section';

function isSectionName(id: string): id is SectionName {
  return ['home', 'about', 'experience', 'projects', 'contact'].includes(id);
}

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionName>('home');

  useEffect(() => {
    // Simple throttle function
    const throttle = (fn: (...args: unknown[]) => void, delay: number) => {
      let lastCall = 0;
      return (...args: unknown[]) => {
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
          lastCall = now;
          fn(...args);
        }
      };
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          if (isSectionName(section.id)) {
            setActiveSection(section.id as SectionName);
          }
        }
      });
    };

    window.addEventListener('scroll', throttle(handleScroll, 200));
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeSection;
}