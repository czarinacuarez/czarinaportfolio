import "./TimelineCardStyle.css";
import { TimelineCategory } from '../../interface';
import TimelineItems from './TimelineItem/TimelineItems';
import { getIconComponent } from '../../utils';
import { motion } from 'framer-motion';

interface TimelineCardProps {
  category: TimelineCategory;
}

function TimelineCard({ category }: TimelineCardProps) {
  const IconComponent = getIconComponent(category.icon);

  return (
    <motion.div

      className="timeline-container max-w-xs bg-white/80 backdrop-blur-sm rounded-lg p-4 cursor-pointer"
      whileHover={{
        boxShadow: "0px 4px 30px rgba(255, 192, 203, 0.3)",
        y: -2,
        transition: { duration: 0.2 }
      }}
    >
      <div className='flex items-center gap-2 p-2'>
        <div className='w-5 h-5 text-rose-400 group-hover:text-rose-500 transition-colors' aria-hidden="true">
          {IconComponent && <IconComponent />}
        </div>
        <span className='title uppercase font-bold font-black text-lg group-hover:text-rose-500 transition-colors'>
          {category?.title || 'Untitled'}
        </span>
      </div>
      <div className='relative space-y-1 mt-2 left-2 pr-2'>
        <TimelineItems items={category?.items || []} />
      </div>
    </motion.div>
  );
}

export default TimelineCard;