import React from 'react';
import TimelineCard from '../../../component/TimelineCard/TimelineCard';
import { useTranslation } from 'react-i18next';
import { TimelineCategory } from '../../../interface';

interface ExpCategoryTranslation {
  categories: TimelineCategory[];
}
const ExperienceSection = () => {
  const { t } = useTranslation('translations');

  // Get the raw data with proper typing
  const rawData = t('expCategory', { returnObjects: true }) as ExpCategoryTranslation;
  console.log('Raw translation data:', rawData);

  // Extract and type the categories array with null check
  const categories = rawData?.categories ?? [];
  console.log('Processed categories:', categories);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-8 md:px-0'>
      <p className="font-straight text-rose-300 text-sm uppercase font-bold my-4 text-center">Here’s what I’ve learned and accomplished over time in my</p>
      <h2 className="text-5xl coquette-font font-bold text-center">
        Experience
      </h2>
      <div className='flex justify-center items-center my-8'>
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
          {categories.map((category, index) => (
            <TimelineCard
              key={`category-${category.title}-${index}`}
              category={category}
            />
          ))}
        </div>
      </div>
    </div>

  );
};

export default ExperienceSection;