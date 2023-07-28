import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/grid.module.scss';

const GridCell = (props: any) => {
  const content = props.title;
  const [number, setNumber] = useState<boolean>(true);

  return (
    <div className={style['grid-container-container']}>
      {content.map((item: any, index: string) => {
        if (number) {
          setNumber(false);
          return (
            <figure key={index}>
              <img src={item.src}></img>
              <div data-number={'first-project'}>
                <Link to={item.path} target="_self">
                  {item.header}
                </Link>
              </div>
            </figure>
          );
        } else {
          return (
            <figure key={index}>
              <img src={item.src}></img>
              <div data-number={number}>
                <Link to={item.path} target="_self">
                  {item.header}
                </Link>
              </div>
            </figure>
          );
        }
      })}
    </div>
  );
};
export default GridCell;
