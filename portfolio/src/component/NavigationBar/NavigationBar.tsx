import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useRef, useState } from "react";


const NavigationBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);

      lastYRef.current = y;
    }
  });

  return (
    <motion.div
      animate={isHidden ? "hidden" : "visible"}
      whileHover="visible"
      onFocusCapture={() => setIsHidden(false)}
      variants={{
        hidden: {
          y: "-90%",
        },
        visible: {
          y: "0%",
        },
      }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 z-10 flex w-full  justify-center pt-3"
    >
      <nav className="flex justify-between gap-3 rounded-3xl bg-white p-5 *:rounded-xl *:border *:border-gray-200 *:px-7 *:py-2 *:transition-colors *:duration-300 *:hover:bg-gray-200 *:focus-visible:bg-gray-200">
        <a href="#home">Home</a>
        <a href="#">About</a>
        <a href="#">Experience </a>
        <a href="#">Projects</a>
        <a href="#" className="bg-gray-200">
          <span className="">Resume</span>
        </a>
      </nav>
    </motion.div>
  );
};

export default NavigationBar;