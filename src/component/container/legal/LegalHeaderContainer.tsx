import React from 'react';
import style from '../../../styles/projectHeader.module.scss';
import DreieckComponent from '../../system/DreieckComponent';
import { Menu } from '../../system/Menu';
import { Logo } from '../../system/Logo';
import { LangageButton } from '../../system/LanguageButton';

interface HeaderProps {
  title: string;
  navContent?: {
    header?: string;
    src?: string;
    path?: string;
  }[];
}

const LegalHeaderContainer: React.FC<HeaderProps> = ({ navContent, title }) => {
  return (
    <div>
      <div
        className={style['header-container']}
        style={{
          backgroundImage: `url(${navContent[0].src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <LangageButton />
        <Menu navContent={navContent} column />
        <Logo />
        <div className={style['header-text']}>
          <h1>{title}</h1>
        </div>
      </div>
      <DreieckComponent />
    </div>
  );
};
export default LegalHeaderContainer;
