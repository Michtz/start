import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/grid.module.scss';

const GridCell = (props: any) => {
  const content = props.title;

  return (
    <div className={style['grid-container-container']}>
      {content.map((item: any, index: number) => (
        <figure key={index}>
          <img id="project3Home" src={item.src}></img>
          <figcaption>
            <Link to={item.path}>{item.header}</Link>
          </figcaption>
        </figure>
      ))}
      <button>test</button>
      <img src={'https://meinhof.ch/src/logo/meinhofLogoWeissID.png'} />
    </div>
  );
};
export default GridCell;
