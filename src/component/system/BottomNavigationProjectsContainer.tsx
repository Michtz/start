import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from '../../styles/bottomNav.module.scss';
import { ProjectProps } from '../types';


interface BottomNavProps {
  navContent: ProjectProps[];
}

const BottomNavigation: React.FC<BottomNavProps> = ({ navContent }) => {
  const location = useLocation();
  const path = location.pathname;
  const parentRef = useRef<HTMLDivElement | null>(null);
  const [hovered, setHovered] = useState(-1);

  return (
    <div className={style['flex-bottom-nav-container']}>
      {navContent
        .filter((obj) => obj.path !== path)
        .map((obj, index: number): JSX.Element => {
          return (
            <figure key={index}>
              <img src={obj.src}></img>
              <div ref={parentRef}>
                <Link
                  to={obj.path}
                  target="_self"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(-1)}
                >
                  <h2 className={style[hovered === index ? 'hovered' : '']}> {obj.header}</h2>
                </Link>
              </div>
            </figure>
          );
        })}
    </div>
  );
};
export default BottomNavigation;
