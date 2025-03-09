import React, { useState } from 'react';
import { motion } from 'motion/react';
import ShinyButton from '../../../component/ShinyButton/ShinyButton';
import sparkling from '../../../assets/icons/sparklingButterfly.svg';
import { useTranslation } from 'react-i18next';
import { ContactModal } from '../../../component/ContactModal/ContactModal';
const ContactSection = () => {
  const { t } = useTranslation('translations');
  const [open, setOpen] = useState(false);

  return (
    <div className=' w-full  flex items-center justify-center'>
      <motion.div
        className="contact-container home-shadow py-20 md:py-30 px-10 md:px-20 rounded-2xl relative"
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }} >
        <ContactModal open={open} setOpen={setOpen} />

        <img
          src={sparkling}
          alt="sparkles"
          className="absolute inset-0 m-auto w-90 md:w-80 h-full pointer-events-none"
        />
        <h1 className="font-bold text-5xl coquette-title darker text-center text-white max-w-xl mx-auto relative z-10">
          {t('contactCategory.title')}
        </h1>
        <div className="flex justify-center relative z-10">
          <ShinyButton onClick={() => setOpen(true)}
            className="text-white mt-5 darker">{t('getInTouch')}</ShinyButton>
        </div>
        <span className='text-xl text-center text-white font-bold coquette-description darker block mt-5 relative z-10'>
          {t('contactCategory.slot')}
        </span>
      </motion.div >
    </div>
  )
}

export default ContactSection;