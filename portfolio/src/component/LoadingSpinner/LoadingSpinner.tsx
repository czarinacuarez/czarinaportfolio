import { motion } from "motion/react"
import { ribbon } from "../../assets/designs"

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen gap-2">
      <div className="flex gap-10">
        {[0, 1, 2].map((index) => (
          <motion.img
            key={index}
            src={ribbon}
            loading="lazy"
            alt={`loading dot ${index}`}
            className="w-10 h-10"
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              repeatType: "loop",
              times: [0, 0.5, 1],
              delay: index * 0.2,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default LoadingSpinner