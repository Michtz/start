import React, { useEffect, useState } from 'react';
import style from '../../../styles/projectHeader.module.scss';
import DreieckComponent from '../../system/DreieckComponent';
import { Menu } from '../../system/Menu';
import { Logo } from '../../system/Logo';
import { LangageButton } from '../../system/LanguageButton';

interface HeaderProps {
  header: string;
  src: string;
  navContent: {
    header: string;
    src: string;
    path: string;
  }[];
}

const ProjectHeaderContainer: React.FC<HeaderProps> = ({ header, src, navContent }) => {
  const [size, setSize] = useState(40);
  useEffect(() => {
    if (window.innerWidth > 768) {
      setSize(20);
    }
  }, [window]);

  return (
    <div>
      <div
        className={style['header-container']}
        style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <LangageButton />
        <Menu navContent={navContent} size={size} column />
        <Logo />
        <div className={style['header-text']}>
          <h1>{header}</h1>
        </div>
      </div>
      <DreieckComponent />
    </div>
  );
};
export default ProjectHeaderContainer;
