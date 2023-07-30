import React, { useContext, useState } from 'react';
import { MainContent } from '../CreateContextMain';
import style from '../../styles/navigation.module.scss';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
import { Headers, NavContent } from '../CreateContextMain';

export const MenuContentProjects = () => {
  const context = useContext(Headers);

  return (
    <div>
      {context.map((context: any, i: number): any => (
        <Link to={context.path}>{context.header}</Link>
      ))}
      rrr
    </div>
  );
};

interface MenuContentMainProps {
  menuOpen: boolean;
  navContent: {
    header: string;
    src: string;
    path: string;
  }[];
}

export const MenuContent: React.FC<MenuContentMainProps> = ({ menuOpen, navContent }) => {
  return menuOpen ? (
    <div className={style['mainNavContentOpen']}>
      {navContent.map((obj: any, i: number) => (
        <a key={i} href={obj.path}>
          {obj.header}
        </a>
      ))}
    </div>
  ) : (
    <div className={style['mainNavContent']}>
      {navContent.map((obj: any, i: number) => (
        <a key={i} href={obj.path}>
          {obj.header}
        </a>
      ))}
    </div>
  );
};

/*
 ** Hamburger menu docs link: https://hamburger-react.netlify.app/
 **
 */

export const Menu = ({ navContent }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <nav className={style['mainNav']}>
      <div>
        <Hamburger
          size={40}
          easing="ease-in"
          rounded
          color="white"
          onToggle={() => setMenuOpen(!menuOpen)}
        />
      </div>
      <MenuContent navContent={navContent} menuOpen={menuOpen} />
    </nav>
  );
};