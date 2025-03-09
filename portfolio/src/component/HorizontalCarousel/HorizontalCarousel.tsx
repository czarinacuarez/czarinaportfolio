import { motion, useTransform, useScroll } from "framer-motion";
import React, { useRef } from "react";
import OutlineButton from "../OutlineButton/OutlineButton";
import { ProjectCategory } from "../../interface";

interface HorizontalCarouselProps {
  projects: ProjectCategory[];
}

const HorizontalCarousel = ({ projects }: HorizontalCarouselProps) => {
  return (
    <div className="bg-white lg:hidden">
      <HorizontalScrollCarousel projects={projects} />
    </div>
  );
};

interface HorizontalScrollCarouselProps {
  projects: ProjectCategory[];
}

const HorizontalScrollCarousel = ({ projects }: HorizontalScrollCarouselProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: ProjectCategory;
}
const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="space-y-8 p-6 border border-rose-400 rounded-2xl min-w-[200px] w-[100vw] max-w-[450px]">
      {/* Image */}
      <div className="h-[200px] md:h-[300px] rounded-lg overflow-hidden bg-beige-100">
        <motion.img
          whileHover={{ scale: 1.03 }}
          src={`/assets/projects/${project.image}`}
          alt={project.title}
          className="w-full h-full object-cover rounded-2xl "
        />
      </div>

      {/* Description */}
      <div className="flex flex-col h-full">
        <div className='flex flex-row gap-2 items-center mb-4'>
          <h2 className="text-xl md:text-2xl font-bold">
            {project.title}
          </h2>
        </div>

        <div className="flex-grow space-y-4">
          <p className="text-base md:text-lg">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((item, index) => (
              <OutlineButton
                key={index}
                className="text-xs py-1 px-3"
              >
                {item}
              </OutlineButton>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCarousel;