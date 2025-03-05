import React from 'react';
import { motion } from 'framer-motion';
import { TimelineItem } from '../../../interface';
import PinkOutlineContainer from '../../PinkOutlineContainer/PinkOutlineContainer';

interface TimelineItemProps {
  items: TimelineItem[];
}

function TimelineItems({ items }: TimelineItemProps) {
  if (!items || !Array.isArray(items) || items.length === 0) {
    return <div>No items to display</div>;
  }

  return (
    <div className="timeline-items">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="timeline-item group relative cursor-pointer"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className='absolute w-px left-1.5 top-4 bottom-2 bg-rose-200 group-hover:bg-rose-400 transition-colors'></div>
          <div className='relative pl-6 pb-2'>
            {index == 0 ? (
              <motion.div
                className='absolute left-0 top-0 w-4 h-4 rounded-full border-2 border-rose-400 bg-rose-400'
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              />
            ) : (
              <motion.div
                className='absolute left-0 top-0 w-4 h-4 rounded-full border-2 border-rose-200 bg-white group-hover:border-rose-400 group-hover:bg-rose-50 transition-colors'
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              />
            )}

            <div className='space-y-1  rounded-lg hover:bg-rose-50/50 transition-colors'>
              <h3 className='text-sm font-bold text-black group-hover:text-rose-500 transition-colors'>{item.role}</h3>
              <div className='justify-between flex items-center'>
                <h3 className='text-xs font-normal text-black w-2/4 group-hover:text-rose-400 transition-colors'>{item.institution}</h3>
                <PinkOutlineContainer item={item.date} />
              </div>
              {item.description && (
                <h3 className='text-sm font-semibold italic text-rose-400'>{item.description}</h3>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default TimelineItems;