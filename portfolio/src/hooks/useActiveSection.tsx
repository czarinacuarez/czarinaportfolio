import { useEffect, useState } from 'react';
import type { SectionName } from '../types/section';
import { SECTION_NAMES } from '../constants/sections';
import { throttle } from 'lodash';

function isSectionName(id: string): id is SectionName {
  return SECTION_NAMES.includes(id as SectionName);
}

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<SectionName>('home');

  useEffect(() => {
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

    const throttledHandleScroll = throttle(handleScroll, 200);
    window.addEventListener('scroll', throttledHandleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  return activeSection;
}