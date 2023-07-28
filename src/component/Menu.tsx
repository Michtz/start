import React, { useContext, useState } from 'react';
import { MainContent } from './CreateContextMain';
import style from '../styles/navigation.module.scss';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
import { Headers, NavContent } from './CreateContextMain';

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
}

export const MenuContentMain: React.FC<MenuContentMainProps> = ({ menuOpen }) => {
  const context = useContext(NavContent);

  return menuOpen ? (
    <div className={style['mainNavContentOpen']}>
      {context.map((context: any, i: number) => (
        <a key={i} href={context.path}>
          {context.header}
        </a>
      ))}
    </div>
  ) : (
    <div className={style['mainNavContent']}>
      {context.map((context: any, i: number) => (
        <a key={i} href={context.path}>
          {context.header}
        </a>
      ))}
    </div>
  );
};
/*
 ** Hamburger menu docs link: https://hamburger-react.netlify.app/
 **
 */
export const Menu = () => {
  const context = useContext(MainContent);
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
      <MenuContentMain menuOpen={menuOpen} />
    </nav>
  );
};
