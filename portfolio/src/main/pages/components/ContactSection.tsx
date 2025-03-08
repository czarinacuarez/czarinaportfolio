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
    <div className="contact-container home-shadow max-w-4xl w-full py-30 mx-5 md:mx-10 lg:mx-auto rounded-default relative">
      <ContactModal open={open} setOpen={setOpen} />

      <motion.img
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
    </div>
  )
}

export default ContactSection;