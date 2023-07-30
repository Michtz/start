import React, { useState } from 'react';
import style from '../../styles/grid.module.scss';
import { ProjectProps } from '../types';
import { Link } from 'react-router-dom';

type GridContent = {
  content: ProjectProps[];
};

// One Grid Element
const GridCell: React.FC<ProjectProps> = ({ src, header, path, index }): JSX.Element => {
  const [hovered, setHovered] = useState(-1);
  return (
    <figure key={path}>
      <img src={src}></img>
      <div>
        <Link
          to={path}
          target="_self"
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(-1)}
        >
          <h2 className={style[hovered === index ? 'hovered' : '']}> {header}</h2>
        </Link>
      </div>
    </figure>
  );
};

// Grid container
const GridContainer: React.FC<GridContent> = ({ content }): JSX.Element => {
  return (
    <div className={style['grid-container-container']}>
      {content.map((obj: any, index: number) => {
        return <GridCell header={obj.header} src={obj.src} path={obj.path} index={index} />;
      })}
    </div>
  );
};
export default GridContainer;
