import React, { useContext, useRef, useState } from 'react';
import style from '../../styles/navigation.module.scss';
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';
import { Headers } from '../../CreateContent/de/content/CreateContext';


export const MenuContentProjects = () => {
 const langange = useRef()
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

// Column Nav
export const MenuContentColumn: React.FC<MenuContentMainProps> = ({ menuOpen, navContent }) => {
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

// Row Nav
export const MenuContentInRow: React.FC<MenuContentMainProps> = ({ menuOpen, navContent }) => {

  return menuOpen ? (
    <div className={style['in-row-nav-content-open']}>
      {navContent.map((obj: any, i: number) => (
        <a key={i} href={obj.path}>
          {obj.header}
        </a>
      ))}
    </div>
  ) : (
    <div className={style['in-row-nav-content']}>
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

export const Menu = ({ navContent, column = false }) => {
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
      {column ? (
        <MenuContentColumn navContent={navContent} menuOpen={menuOpen} />
      ) : (
        <MenuContentInRow navContent={navContent} menuOpen={menuOpen} />
      )}
    </nav>
  );
};
