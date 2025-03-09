import { useState } from 'react';
import PinkOutlineContainer from '../PinkOutlineContainer/PinkOutlineContainer';
import { motion } from 'motion/react';
import DOMPurify from 'dompurify';

interface NoOutlineCardProps {
  title: string;
  type: string;
  description: string;
  date: string;
  image: string;
  placeholder: string;
}

function NoOutlineCard({
  title,
  type,
  description,
  date,
  image,
  placeholder
}: NoOutlineCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative cursor-pointer rounded-lg transition-all duration-300 h-full flex flex-col"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onTapStart={() => setIsHovered(true)}
      onTap={() => setIsHovered(false)}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      whileTap={{
        scale: 0.98,
        transition: { duration: 0.2 }
      }}
    >
      <div className="relative overflow-hidden rounded-lg h-60 transition-all duration-300
        group-hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.3)]
        shadow-[0_4px_12px_rgba(0,0,0,0.1)]
        group-hover:ring-2 group-hover:ring-rose-200/50">
        {/* Placeholder image - hidden on mobile */}
        <motion.img
          src={placeholder}
          className="w-full h-full object-cover hidden lg:block"
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* Main image - always visible on mobile */}
        <motion.img
          src={image}
          className="absolute inset-0 w-full h-full object-cover lg:opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        {/* Mobile-only main image (no animation) */}
        <img
          src={image}
          className="w-full h-full object-cover lg:hidden"
          alt={title}
        />
      </div>


      <div className="mt-4 space-y-2 flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          <h3 className="text-2xl text-rose-300 font-bold">{title}</h3>
          <p dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(description, {
              ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
              ALLOWED_ATTR: ['href', 'target', 'rel']
            })
          }} className="base" />        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm ">{type}</span>
          <PinkOutlineContainer item={date} />
        </div>
      </div>
    </motion.div >
  );
}

export default NoOutlineCard;