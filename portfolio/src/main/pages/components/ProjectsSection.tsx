import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import thinRibbon from '../../../assets/icons/thinribbon.svg';
import OutlineButton from '../../../component/OutlineButton/OutlineButton';
import { ProjectCategory } from '../../../interface';
import { useTranslation } from 'react-i18next';

interface ProjCategoryTranslation {
  projects: ProjectCategory[];
}

const ProjectsSection = () => {
  const { t } = useTranslation('translations');

  // Get the raw data with proper typing
  const rawData = t('projCategory', { returnObjects: true }) as ProjCategoryTranslation;

  // Get projects array with proper typing and default empty array
  const projects = rawData?.projects || [];

  // Initialize activeProject after getting projects
  const [activeProject, setActiveProject] = useState<ProjectCategory>(projects[0] || null);
  const isLastProject = activeProject?.id === projects[projects.length - 1]?.id;

  // Early return if no projects
  if (!projects.length) return null;
  return (
    <div className="container mx-auto px-4 md:pt-40 md:pb-20">
      <div className='md:mb-40 mb-10'>
        <p className="font-straight  text-sm uppercase font-bold my-4 text-center">{t('projCategory.description')}</p>
        <h2 id="achievements-heading" className="text-5xl text-rose-300 coquette-font font-bold text-center">
          {t('titles.projects')}
        </h2>
      </div>
      {/* On mobile: Stack each image+description pair */}
      <div className="flex flex-col gap-16 lg:hidden ">
        {projects.map((project) => (
          <div key={project.id} className="space-y-8 p-5 border border-rose-400 rounded-2xl">
            {/* Image */}
            <div className="h-[300px] rounded-lg overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="h-full w-full"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Description under image */}
            <div className="px-4">
              <h2 className="text-2xl font-bold mb-4">
                {project.title}
              </h2>
              <div className="space-y-4">
                <p className="text-base">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop layout - only show on larger screens */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-8">
        <div className="space-y-20">
          {projects.map((project) => {
            const [ref, inView] = useInView({
              threshold: 0.5,
              rootMargin: '-160px 0px -160px 0px',
              onChange: (inView) => {
                if (inView) {
                  setActiveProject(project);
                }
              },
            });

            return (
              <div
                ref={ref}
                key={project.id}
                className="h-[500px] overflow-hidden border border-rose-400 rounded-4xl group cursor-pointer
  transition-all duration-300 hover:shadow-xl hover:shadow-rose-200/50 p-3"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: inView ? 1 : 0.2 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{
                    opacity: {
                      duration: 0.5,
                      ease: "easeInOut"
                    },
                    scale: {
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }}
                  className="h-full w-full p-5"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-2xl "
                  />
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Sticky description - desktop only */}
        <div className="sticky top-30 h-fit">
          <motion.div
            key={activeProject.id}

          >
            <div className={`
              flex flex-col align-start px-10 pt-10
              h-full min-h-[500px]
              ${isLastProject ? 'justify-between' : ''}
            `}>
              <div className='flex flex-row gap-2'>
                <img src={thinRibbon} className='size-10' />
                <h2 className="text-2xl font-bold mb-4">
                  {activeProject.title}
                </h2>
              </div>

              <div className="flex-grow pl-12">
                <p className="text-lg">
                  {activeProject.description}
                </p>
                <ul className="text-sm font-semibold my-6 space-y-2">
                  {activeProject.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mx-auto flex max-w-4xl flex-wrap text-sm text-gray-800 gap-2">
                  {activeProject.tech.map((item, index) => (
                    <OutlineButton key={index}>{item}</OutlineButton>
                  ))}

                </div>
              </div>


            </div>
          </motion.div>
        </div>
      </div>
      {/* {isLastProject && (
        <div className="text-center mt-20">
          <ShinyButton>
            And More
          </ShinyButton>
        </div>
      )} */}
    </div>
  );
};

export default ProjectsSection;