import React from "react";
import { motion } from "framer-motion";
import './PinkButton.css';

interface PinkButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactElement;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const PinkButton: React.FC<PinkButtonProps> = ({
  children,
  onClick,
  className = "",
  icon,
  disabled = false,
  type = "button"
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : { scale: 1.05 }}
      whileTap={disabled ? undefined : { scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      className={`
        flex items-center pink-button w-full gap-2 justify-center
        ${disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}
        ${className}
      `}
    >
      {icon && (
        <motion.span
          className="text-rose-400"
          initial={{ rotate: 0 }}
          animate={disabled ? undefined : { rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {icon}
        </motion.span>
      )}
      {children}
    </motion.button>
  );
};

export default PinkButton;