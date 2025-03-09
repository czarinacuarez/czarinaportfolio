import React from 'react';
import TimelineCard from '../../../component/TimelineCard/TimelineCard';
import { useTranslation } from 'react-i18next';
import { TimelineCategory } from '../../../interface';
import rabbitHeart from '../../../assets/icons/rabbitheart.svg';
import { motion } from 'framer-motion';
interface ExpCategoryTranslation {
  categories: TimelineCategory[];
}
const ExperienceSection = () => {
  const { t } = useTranslation('translations');

  // Get the raw data with proper typing
  const rawData = t('expCategory', { returnObjects: true }) as ExpCategoryTranslation;

  // Extract and type the categories array with null check
  const categories = rawData?.categories ?? [];

  return (
    <section className='min-h-screen flex flex-col items-center mx-2 justify-center' aria-labelledby="experience-heading">
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <p className="font-straight text-rose-300 text-sm uppercase font-bold my-4 text-center">{t('expCategory.description')}</p>
        <h2 id="experience-heading" className="text-5xl coquette-font font-bold text-center">
          {t('titles.experience')}
        </h2>
      </motion.div>
      <div className='flex justify-center items-center my-8'>
        <motion.div
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className="grid gap-4 md:grid-cols-2 grid-cols-1">
          {categories.map((category, index) => (
            <TimelineCard
              key={`category-${category.title}-${index}`}
              category={category}
            />
          ))}
          <img src={rabbitHeart} className='items-center m-auto my-2 md:my-0' />
        </motion.div>
      </div>
    </section>

  );
};

export default ExperienceSection;