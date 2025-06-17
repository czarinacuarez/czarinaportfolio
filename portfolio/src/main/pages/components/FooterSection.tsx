import { GithubIcon, LinkedinIcon, LocationIcon, MailIcon } from '../../../assets/icons';
import { useTranslation } from 'react-i18next';
import resumePDF from '../../../assets/resume/Cuarez_Resume.pdf'
import { butterfly, thinRibbon } from '../../../assets/designs';
const FooterSection = () => {

  const { t } = useTranslation('translations');

  const navigationItems = [
    { id: 'home', label: t('titles.home') },
    { id: 'about', label: t('titles.about') },
    { id: 'experience', label: t('titles.experience') },
    { id: 'projects', label: t('titles.projects') },
    { id: 'achievements', label: t('titles.achievements') },
    { id: 'resume', label: t('titles.resume') }
  ];

  const handleEmailClick = () => {
    window.location.href = "mailto:czarinakrisel@gmail.com";
  };

  const handleClick = (id: string) => {
    if (id === 'resume') {
      window.open(resumePDF, '_blank', 'noopener,noreferrer');
    } else {
      scrollToSection(id);
    }
  };

  const handleLocationClick = (location: string) => {
    window.open(`https://www.google.com/maps/search/${encodeURIComponent(location)}`, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="container mx-auto px-4">
      <div className="divider my-8 mx-auto"></div>
      <div
        className='my-10 grid grid-cols-1 md:grid-cols-3 gap-5 max-w-10/12 mx-auto *:my-3 *:md:my-1'>
        <div className='flex flex-col md:items-start items-center space-y-2'>
          <div className='flex flex-row gap-2 items-center'>
            <img src={thinRibbon} loading="lazy" className='size-6' alt="Decorative Thin Aesthetic Ribbon" />
            <h1 className='text-2xl font-bold coquette-font text-center md:text-start text-rose-300'>{t('details.wholeName')}</h1>
          </div>
          <p className='text-lg text-center md:text-start'>{t('details.description')}</p>
          <div className='flex gap-3'>
            <a href={t('details.socials.github')} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <GithubIcon className='size-6 text-rose-200' />
            </a>
            <a href={t('details.socials.linkedin')} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <LinkedinIcon className='size-6 text-rose-200' />
            </a>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center space-y-2'>
            <h2 className='uppercase text-base text-rose-300 font-bold'>{t('portfolio')}</h2>
            <div className='items-center flex flex-col gap-2 *:cursor-pointer *:hover:text-rose-400 *:text-sm'>
              {navigationItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => handleClick(id)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className='flex flex-col md:items-end items-center space-y-2'>
          <h2 className='uppercase text-base text-rose-300 font-bold '>{t('getInTouch')}</h2>
          <button
            className='flex flex-row gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-0'
            onClick={handleEmailClick}
            aria-label="Send email"
          >
            <div className='bg-rose-50 p-2 rounded-full'>
              <MailIcon className='size-5 text-rose-300' />
            </div>
            <p className='text-sm  hover:text-rose-400 '>{t('details.emailAdd')}</p>
          </button>
          <button
            className='flex flex-row gap-2 items-center cursor-pointer hover:opacity-80 transition-opacity\
             bg-transparent border-0'
            onClick={() => handleLocationClick(t('details.secLoc'))}
            aria-label="View location on map"
          >
            <div className='bg-rose-50 p-2 rounded-full'>
              <LocationIcon className='size-5 text-rose-300' />
            </div>
            <p className='text-sm hover:text-rose-400 '>{t('details.secLoc')}</p>
          </button>
          <button
            className='flex-row gap-2 items-center cursor-pointer hidden md:flex hover:opacity-80
            transition-opacity bg-transparent border-0'
            onClick={() => handleLocationClick(t('details.primLoc'))}
            aria-label="View primary location on map"
          >
            <div className='bg-rose-50 p-2 rounded-full'>
              <LocationIcon className='size-5 text-rose-300' />
            </div>
            <p className='text-sm hover:text-rose-400 '>{t('details.primLoc')}</p>
          </button>
        </div>
      </div>
      <div className="divider my-8 mx-auto"></div>
      <div>
        <img src={butterfly} loading="lazy" className='size-30 mx-auto' alt="Decorative Butterfly" />
        <div className='text-center space-y-4 mb-20 md:mb-0'>
          <p className='text-sm coquette-font font-bold gradient-text'>{t('details.sigQuote')}</p>
          <p className='text-xs'>{t('details.copyright')}</p>
        </div>
      </div>

    </div >
  )
}

export default FooterSection;