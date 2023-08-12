import { useEffect, useRef, useState } from 'react';
import style from '../../../styles/homeHeader.module.scss';
import DreieckComponent from '../../system/DreieckComponent';
import { Menu } from '../../system/Menu';
import { Logo } from '../../system/Logo';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { LangageButton } from '../../system/LanguageButton';
import { useLanguage } from '../../../CreateContent/LanguageProvider';
import { HandleScrollbarMovmend } from '../../functions/function';

type Href = { href: string };

const ArrowDown: React.FC<Href> = ({ href }) => {
  return (
    <div className={style['arrow']}>
      <a href={href}>
        <KeyboardArrowDownIcon style={{ color: '#ffffff', fontSize: `40px`, borderRadius: '5px' }} />
      </a>
    </div>
  );
};

const HomeHeaderContainer: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const [size, setSize] = useState(40);
  HandleScrollbarMovmend(headerRef);
  useEffect(() => {
    if (window.innerWidth > 768) {
      setSize(20);
    }
  }, [window]);

  return (
    <div>
      <div ref={headerRef} className={style['home-header-container']}>
        <LangageButton />
        <Menu navContent={language.navigations.home} size={size} />
        <Logo />
        <div className={style['header-text']}>
          {language.homeHeader.map((obj: string, i: number) => (
            <h1 key={i}>{obj}</h1>
          ))}
        </div>
        <ArrowDown href={language.navigations.home[2].path} />
      </div>
      <DreieckComponent />
    </div>
  );
};
export default HomeHeaderContainer;
