import { motion } from "motion/react";

interface AlertProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Alert = ({ message, type, onClose }: AlertProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className={`fixed top-4 right-4 z-[60] rounded-lg p-4 shadow-lg flex items-center gap-2
        ${type === 'success' ? 'bg-rose-50 text-rose-500' : 'bg-rose-500 text-rose-50'}`}
    >
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-auto text-sm hover:opacity-70"
      >
        ✕
      </button>
    </motion.div>
  );
};

export default Alert;