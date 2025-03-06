import React from 'react';
import { useTranslation } from 'react-i18next';
import { AchievementCategory } from '../../../interface';
import NoOutlineCard from '../../../component/NoOutlineCard/NoOutlineCard';
import firstPattern from '../../../assets/img/firstPattern.png';
import secondPattern from '../../../assets/img/secondPattern.png';

interface AchievementsCategoryTranslation {
  items: AchievementCategory[];
}
const AchievementsSection = () => {

  const { t } = useTranslation('translations');

  const rawData = t('achieveCategory', { returnObjects: true }) as AchievementsCategoryTranslation;

  // Get projects array with proper typing and default empty array
  const items = rawData?.items || [];
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <p className="font-straight text-rose-300 text-sm uppercase font-bold my-4 text-center">Beyond that, my passion for tech has driven me to accomplish these</p>
      <h2 id="achievements-heading" className="text-5xl coquette-font font-bold text-center">
        Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-20 max-w-xl w-80 md:w-full md:max-w-4xl">
        {items.map((item) => (
          <NoOutlineCard
            key={item.title}
            title={item.title}
            type={item.type}
            description={item.description}
            date={item.date}
            image={item.image}
            placeholder={item.placeholder === 'firstPattern' ? firstPattern : secondPattern}
          />
        ))}
      </div>
    </div>
  )
}

export default AchievementsSection;