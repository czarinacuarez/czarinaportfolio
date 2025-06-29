import me from "../../../assets/img/me.webp"
import { GithubIcon, LinkedinIcon } from '../../../assets/icons';
import OutlineButton from '../../../component/OutlineButton/OutlineButton';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { butterflyribbon } from "../../../assets/designs";

const AboutSection = () => {
  const { t } = useTranslation("translations");

  return (
    <div className="relative ">
      <div
        className="min-h-screen flex flex-col gap-2 lg:gap-5 lg:flex-row items-center justify-center lg:px-8">
        <div
          className="w-full lg:w-1/2 max-w-xl">
          <img src={me}
            loading="lazy"
            className='me-image w-full'
            alt="Czarina Cuarez Picture" />
        </div>
        <div
          className="w-full lg:w-1/2 max-w-xl space-y-4 text-center lg:text-start px-4 lg:px-0">
          <p className="font-straight text-xs md:text-sm uppercase font-bold text-rose-300">{t("details.title")}</p>
          <h2 className="md:text-5xl text-3xl font-normal font-straight">  {t('intro.greets')} <br className="lg:hidden" />
            <span className="text-rose-300 coquette-font font-bold">{t('details.wholeName')}</span>
          </h2>
          <div className="text-sm md:text-base">
            {t('intro.intro')}
            <span className='coquette-font font-bold text-rose-300 text-lg lg:text-xl'> {t('intro.role')}</span>
            {t('intro.workplace')}
            <div className="mt-4">
              {t('intro.passion')}
              <span className='coquette-font font-bold text-rose-300 text-lg lg:text-xl'> {t('intro.personality')} </span>
              {t('intro.growth')}
            </div>
            <div className="mt-4">
              {t('intro.now')}
            </div>
          </div>
          <div className='flex gap-3 justify-center lg:justify-start'>
            <a href={t('details.socials.github')} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <GithubIcon className='size-6 hover:text-rose-300' />
            </a>
            <a href={t('details.socials.linkedin')} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <LinkedinIcon className='size-6 hover:text-rose-300' />
            </a>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
        className="min-h-screen flex flex-col items-center justify-center my-10 x-10 lg:my-0">
        <img src={butterflyribbon} loading="lazy" alt="Butterfly Ribbon Decoration" />
        <p className="font-straight text-sm uppercase font-bold my-4 text-center">{t('techCategory.description')}</p>
        <h2 className="text-5xl text-rose-300 coquette-font font-bold">
          {t('titles.techStack')}
        </h2>
        <div>
          <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2 text-lg text-gray-800 lg:gap-4">
            {(t('techCategory.items', { returnObjects: true }) as Array<{ name: string, icon: string }>).map((tech) => (
              <OutlineButton key={tech.name} className="text-xs lg:text-sm py-1 px-3"
              >
                <img
                  loading="lazy"
                  src={`/assets/techStack/${tech.icon}`}
                  alt={`${tech.name} logo`}
                  className="w-5 h-5 mr-2 inline-block transition-all"
                />
                {tech.name}
              </OutlineButton>
            ))}
          </div>
        </div>
      </motion.div>

    </div>

  )
}

export default AboutSection;