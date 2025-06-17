import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import OutlineButton from "../OutlineButton/OutlineButton";
import { ProjectCategory } from "../../interface";
import { GithubIcon, LinkIcon } from "../../assets/icons";
import { useWindowHeight } from "../../hooks/useWindowHeight";
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



const HorizontalScrollCarousel = ({ projects }: HorizontalCarouselProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div
        className="sticky top-0 flex h-screen items-center overflow-hidden"
        role="region"
        aria-label="Project carousel"
        tabIndex={0}
      >
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
  const height = useWindowHeight();
  const ifHeightShort = height <= 400;

  return (
    <div
      className={`${ifHeightShort ? "space-y-2 py-2 px-2" : "space-y-8 py-6 px-6"
        } border border-rose-400 rounded-2xl min-w-[200px] w-[100vw] max-w-[450px]`}
    >      {/* Image */}
      <div className={`${ifHeightShort ? "h-[180px]" : "h-[200px] md:h-[300px]"} rounded-lg overflow-hidden bg-beige-100`}>
        <motion.img
          whileHover={{ scale: 1.03 }}
          src={`/assets/projects/${project.image}`}
          alt={`${project.title} project image - mobile view`}
          loading="lazy"
          className="w-full h-full object-cover rounded-2xl "
        />
      </div>

      {/* Description */}
      <div className="flex flex-col h-full">
        <div className='flex flex-row gap-2 items-center mb-2'>
          <h2 className={`${ifHeightShort ? "text-sm" : "text-xl md:text-2xl"} font-bold`}>
            {project.title}
          </h2>
          <div className="flex gap-1">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full  "
                aria-label={`Visit ${project.title} demo`}
              >
                <LinkIcon className="size-5 text-rose-400 hover:text-black" />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full transition-colors"
                aria-label={`View ${project.title} source code on GitHub`}
              >
                <GithubIcon className="size-5 text-rose-400 hover:text-black" />
              </a>
            )}
          </div>
        </div>
        <div className="flex-grow space-y-4">
          <p className={`${ifHeightShort ? "text-xs" : "text-base md:text-lg"}`}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {(ifHeightShort ? project.tech.slice(0, 2) : project.tech).map((item, index) => (
              <OutlineButton
                key={index}
                className="text-xs py-1 px-3"
              >
                {item}
              </OutlineButton>
            ))}
            {ifHeightShort && project.tech.length > 2 && (
              <span className="text-xs py-1 px-3 text-rose-400">+{project.tech.length - 2} more</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCarousel;