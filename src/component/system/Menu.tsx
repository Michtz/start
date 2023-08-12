import React, { useState } from 'react';
import style from '../../styles/navigation.module.scss';
import Hamburger from 'hamburger-react';

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

export const Menu = ({ navContent, column = false, size }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <nav className={style['mainNav']}>
      <div>
        <Hamburger
          size={size}
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
