import { motion, useScroll, useTransform } from "motion/react";
import React, { useEffect, useRef, useState } from 'react';
import sparkling from '../../assets/icons/sparklings.svg';
import ShinyButton from "../ShinyButton/ShinyButton";
import CopyButton from "../CopyButton/CopyButton";
import { useTranslation } from "react-i18next";
import { ContactModal } from "../ContactModal/ContactModal";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const cloudsRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation('translations');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const updateCloudsZIndex = () => {
      if (!cloudsRef.current) return;
      if (scrollYProgress.get() < 0.1) {
        cloudsRef.current.style.zIndex = '0';
      } else {
        cloudsRef.current.style.zIndex = '20';
      }
    };
    const unsubscribe = scrollYProgress.on('change', updateCloudsZIndex);
    return () => unsubscribe();
  }, [scrollYProgress, prefersReducedMotion]);


  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center">
      <ContactModal open={open} setOpen={setOpen} aria-modal="true" />
      <motion.div style={{ y: textY }} className="relative flex items-center justify-center z-10 mb-10">
        <img
          src={sparkling}
          className="absolute top-20 z-3 left-1/2 transform -translate-x-2/4 -translate-y-1/2"
        />
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.75 }}
          className="*:text-center *:text-white *:font-bold text-center">
          <motion.h1 className="font-bold coquette-title  text-7xl md:text-8xl relative z-2 ">
            {t('details.wholeName')}
          </motion.h1>
          <motion.h3 className="uppercase coquette-description my-4 md:my-2 text-2xl z-5">{t('details.position')}</motion.h3>
          <div className="flex md:flex-row *:font-straight flex-col w-fit m-auto gap-4 md:gap-5 my-4 justify-center">
            <ShinyButton onClick={() => setOpen(true)}
              className="z-5">{t('button.connect')}</ShinyButton>
            <CopyButton className="z-5">{t('details.emailAdd')}</CopyButton>
          </div>
        </motion.div>

      </motion.div>

      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0  -top-[50vh] z-0 background-parallax"
        aria-hidden="true" /* Background decorative element, not functional content */
      >
      </motion.div>
      <motion.div
        ref={cloudsRef}
        className="absolute inset-0 clouds-parallax "
        aria-hidden="true" /* Decorative animation element */
      />
    </div >
  )
}
