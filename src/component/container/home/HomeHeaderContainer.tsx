import { useContext, useEffect, useRef, useState } from 'react';
import style from '../../../styles/homeHeader.module.scss';
import DreieckComponent from '../../system/DreieckComponent';
import { Menu } from '../../system/Menu';
import { NavContent } from '../../../CreateContent/de/content/CreateContext';
import { Logo } from '../../system/Logo';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { LangageButton } from '../../system/LanguageButton';

const ArrowDown = () => {
  const context = useContext(NavContent);

  return (
    <div className={style['arrow']}>
      <a href={context[2].path}>
        <KeyboardArrowDownIcon style={{ color: '#ffffff', fontSize: `40px`, borderRadius: '5px' }} />
      </a>
    </div>
  );
};

const HomeHeaderContainer = ({ currentLanguage, languageButton, navContent }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const [language, setLanguage] = useState<'en' | 'de'>('en');
  useEffect(() => {
    let scrollTimeout;

    const onScroll = () => {
      headerRef.current.classList.add('remove-padding');

      clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        headerRef.current.classList.remove('remove-padding');
      }, 2000);
    };

    document.addEventListener('scroll', onScroll);

    // Clean up function
    return () => {
      document.removeEventListener('scroll', onScroll);
      clearTimeout(scrollTimeout);
    };
  }, []); // Empty array means this effect runs once on mount and clean up on unmount

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'de' : 'en'));
  };

  return (
    <div>
      <div ref={headerRef} className={style['home-header-container']}>
        <LangageButton currentLanguage={currentLanguage} toggleLanguage={languageButton} />
        <Menu navContent={navContent} />
        <Logo />
        <div className={style['header-text']}>
          INTERIOR <br />
          DESIGN
          <br /> WITH
          <br /> IDENTITY
        </div>
        <ArrowDown />
      </div>
      <DreieckComponent />
    </div>
  );
};
export default HomeHeaderContainer;
