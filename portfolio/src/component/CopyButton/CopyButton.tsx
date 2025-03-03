import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import "./CopyButtonStyle.css";
import { CopyIcon, HeartIcon } from "../../assets/icons";
interface CopyButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const CopyButton: React.FC<CopyButtonProps> = ({
  children,
  className = '',
  onClick
}) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const handleClick = () => {
    if (onClick) onClick();
    navigator.clipboard.writeText(children as string);
    setIsCopied(true);
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`${isCopied ? 'copied-button' : 'copy-button'}  cursor-pointer ${className}`}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
      whileTap={{
        scale: 0.95,
        transition: { type: "spring", stiffness: 400, damping: 10 }
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="flex flex-row gap-2"
          key={isCopied ? 'heart' : 'copy'}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isCopied ? <HeartIcon className="size-4" /> : <CopyIcon className="size-4" />}
          <span className="relative z-10 text-sm">
            {isCopied ? 'Email Already Copied!' : children}
          </span>
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyButton;