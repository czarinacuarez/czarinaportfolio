import React from "react";
import { motion } from "motion/react";
import "./OutlineButtonStyle.css";
interface OutlineButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  children,
  className = '',
  onClick
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={` outline-button
         cursor-pointer
        ${className}
      `}
      whileHover={{
        scale: 1.05,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10
        }
      }}
      whileTap={{
        scale: 0.95,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10
        }
      }}
      transition={{
        duration: 0.3,
        ease: [0.42, 0, 0.58, 1]
      }}
    >
      <motion.span className="relative z-10">
        {children}
      </motion.span>
    </motion.button>
  );
};

export default OutlineButton;