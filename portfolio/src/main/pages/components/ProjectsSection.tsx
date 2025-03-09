import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useInView } from 'react-intersection-observer';
import thinRibbon from '@assets/icons/thinRibbon.svg';
import OutlineButton from '../../../component/OutlineButton/OutlineButton';
import { ProjectCategory } from '../../../interface';
import { useTranslation } from 'react-i18next';
import HorizontalCarousel from '../../../component/HorizontalCarousel/HorizontalCarousel';

interface ProjCategoryTranslation {
  projects: ProjectCategory[];
}

interface ProjectCardProps {
  project: ProjectCategory;
  onInView: (project: ProjectCategory) => void;
}

// Separate ProjectCard component with React.memo for performance
const ProjectCard = memo(({ project, onInView }: ProjectCardProps) => {
  const [hasNotified, setHasNotified] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.6,
    rootMargin: '-100px 0px -100px 0px',
  });

  useEffect(() => {
    if (inView && !hasNotified) {
      setHasNotified(true);
      onInView(project);
    } else if (!inView && hasNotified) {
      setHasNotified(false);
    }
  }, [inView, project, onInView, hasNotified]);

  return (
    <div
      ref={ref}
      className="h-[500px] overflow-hidden border border-rose-400 rounded-4xl group cursor-pointer
        transition-all duration-300 hover:shadow-xl hover:shadow-rose-200/50 p-3"
      style={{
        willChange: 'transform, opacity',
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0.5 }}
        transition={{
          opacity: { duration: 0.2, ease: "easeInOut" }
        }}
        className="h-full w-full p-5 bg-beige-100 rounded-2xl"
      >
        <motion.img
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2 }}
          src={`/assets/projects/${project.image}`}
          alt={project.title}
          className="w-full h-full object-cover rounded-2xl"
          loading="lazy"
          style={{ willChange: 'transform' }}
        />
      </motion.div>
    </div>
  );
});
ProjectCard.displayName = 'ProjectCard';

const ProjectsSection = () => {
  const { t } = useTranslation('translations');
  const rawData = t('projCategory', { returnObjects: true }) as ProjCategoryTranslation;
  const projects = rawData?.projects || [];
  const [activeProject, setActiveProject] = useState<ProjectCategory>(projects[0] || null);
  const isLastProject = activeProject?.id === projects[projects.length - 1]?.id;

  const handleProjectInView = useCallback((project: ProjectCategory) => {
    setActiveProject(prev => {
      if (prev?.id === project.id) return prev;
      return project;
    });
  }, []);

  const projectElements = useMemo(() => (
    projects.map((project) => (
      <ProjectCard
        key={project.id}
        project={project}
        onInView={handleProjectInView}
      />
    ))
  ), [projects, handleProjectInView]);

  if (!projects.length) return null;

  return (
    <div className="container mx-auto lg:pt-40 lg:pb-20">
      <div
        className='lg:mb-30 lg:mb-40 mb-0'>
        <p className="font-straight text-sm uppercase font-bold my-4 text-center">
          {t('projCategory.description')}
        </p>
        <h2 id="achievements-heading" className="text-5xl text-rose-300 coquette-font font-bold text-center">
          {t('titles.projects')}
        </h2>
      </div>

      <div
        className="lg:hidden">
        <HorizontalCarousel projects={projects} />
      </div>

      <div
        className="hidden lg:grid lg:grid-cols-2 gap-1 lg:gap-8">
        <div className="space-y-20">
          {projectElements}
        </div>

        <div className="sticky top-30 h-fit">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className={`
                flex flex-col align-start lg:px-10 px-5 pt-10
                h-full min-h-[500px]
                ${isLastProject ? 'justify-between' : ''}
              `}>
                <div className='flex flex-row gap-2'>
                  <img
                    src={thinRibbon}
                    className='size-10'
                    alt="Ribbon decoration"
                    loading="lazy"
                  />
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
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;