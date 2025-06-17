import { lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';
import { bubbles, bubblesLeft, bubblesRight, bunny, cherry, strawberry } from '../../assets/designs';
import * as m from "motion/react-m"
import { LazyMotion, domAnimation } from 'motion/react';
import LoadingSpinner from '../../component/LoadingSpinner/LoadingSpinner';

const HomeSection = lazy(() => import('./components/HomeSection'));
const AboutSection = lazy(() => import('./components/AboutSection'));
const ExperienceSection = lazy(() => import('./components/ExperienceSection'));
const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const AchievementsSection = lazy(() => import('./components/AchievementsSection'));
const ContactSection = lazy(() => import('./components/ContactSection'));
const FooterSection = lazy(() => import('./components/FooterSection'));



const MainPage = () => {
  // Intersection observers for each section
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, rootMargin: '200px' });
  const [experienceRef, experienceInView] = useInView({ triggerOnce: true, rootMargin: '200px' });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, rootMargin: '200px' });
  const [achievementsRef, achievementsInView] = useInView({ triggerOnce: true, rootMargin: '200px' });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, rootMargin: '200px' });
  const [footerRef, footerInView] = useInView({ triggerOnce: true, rootMargin: '200px' });

  return (
    <LazyMotion features={domAnimation}>
      <div>
        <section id="home" className='relative'>
          <Suspense fallback={<LoadingSpinner />}>
            <HomeSection />
          </Suspense>
        </section>

        <div className="px-3 min-h-screen overflow-y-hidden overflow-x-hidden" ref={aboutRef}>
          {aboutInView && (
            <Suspense fallback={<LoadingSpinner />}>
              <m.section
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}
                id="about" className='relative ' >
                <AboutSection />
                <img src={bubbles}
                  loading='lazy'
                  alt='Decorative Bubbles Illustration'
                  className="absolute hidden lg:block top-100 -right-80 w-1/2" />
              </m.section>
            </Suspense>
          )}
        </div>

        <m.section
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className='relative'>
          <img
            src={bunny}
            loading='lazy'
            className="absolute hidden lg:block -top-120 z-10 -left-40 w-full lg:max-w-xl max-w-2xl  mx-auto"
            alt="Decorative Bunny Illustration"
          />
        </m.section>

        <div ref={experienceRef}>
          {experienceInView && (
            <Suspense fallback={<LoadingSpinner />}>
              <m.section
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}
                id="experience" className='relative min-h-screen overflow-hidden px-3'>
                <ExperienceSection />
                <img
                  loading="lazy"
                  src={cherry}
                  className="absolute hidden lg:block top-0 z-10 -right-50 w-full lg:max-w-xl max-w-2xl  mx-auto"
                  alt="Decorative Cherry illustration"
                />
              </m.section>
            </Suspense>
          )}
        </div>

        <m.section
          initial={{ y: 48, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          className='relative'>
          <img
            loading="lazy"
            src={strawberry}
            className="absolute hidden lg:block -top-100 z-10 -left-50 w-full lg:max-w-2xl max-w-2xl  mx-auto"
            alt="Decorative Strawberry illustration"
          />
        </m.section>

        <div ref={projectsRef}>
          {projectsInView && (
            <Suspense fallback={<LoadingSpinner />}>
              <m.section
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}
                id="projects" className="px-3 relative">
                <ProjectsSection />
              </m.section>
            </Suspense>
          )}
        </div>

        <div ref={achievementsRef}>
          {achievementsInView && (
            <Suspense fallback={<LoadingSpinner />}>
              <m.section
                initial={{ y: 48, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ ease: "easeOut", duration: 2 }}
                id="achievements" className="min-h-screen flex justify-center items-center px-3">
                <AchievementsSection />
              </m.section>
            </Suspense>
          )}
        </div>

        <section ref={contactRef} id="contact" className="py-20 flex mx-3 lg:mx-0 justify-center items-center relative overflow-hidden">
          {contactInView && (
            <>
              <img
                loading="lazy"
                src={bubblesLeft}
                className="absolute hidden lg:block -left-60 w-full lg:max-w-4xl  mt-4 mx-auto"
                alt="Decorative bubbles left illustration"
              />
              <div className="relative z-10 rounded-2xl">
                <Suspense fallback={<LoadingSpinner />}>
                  <ContactSection />
                </Suspense>
              </div>
              <img
                loading="lazy"
                src={bubblesRight}
                className="absolute hidden lg:block   -right-60  w-full lg:max-w-4xl mt-4  mx-auto"
                alt="Decorative bubbles right illustration"
              />
            </>
          )}
        </section>

        <section ref={footerRef} id="footer" className="min-h-screen px-3 flex justify-center items-center">
          {footerInView && (
            <Suspense fallback={<LoadingSpinner />}>
              <FooterSection />
            </Suspense>
          )}
        </section>
      </div>
    </LazyMotion>
  )
}

export default MainPage;