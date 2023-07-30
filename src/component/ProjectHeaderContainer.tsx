import React from 'react';
import style from '../styles/projectHeader.module.scss';
import DreieckComponent from './DreieckComponent';
import { Menu } from './Menu';
import { Link } from 'react-router-dom';
import { Logo } from './SmallComponents';

interface HeaderProps {
  header: string;
  src: string;
  navContent: {
    header: string;
    src: string;
    path: string;
  }[];
}
const HeaderContainerProjects: React.FC<HeaderProps> = ({ header, src, navContent }) => {
  return (
    <div>
      <div
        className={style['header-container']}
        style={{ backgroundImage: `url(${src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <Menu navContent={navContent} />
        <Logo />
        <div className={style['header-text']}>
          <h1>{header}</h1>
        </div>
      </div>
      <DreieckComponent />
    </div>
  );
};
export default HeaderContainerProjects;
