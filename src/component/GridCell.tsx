import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/grid.module.scss';

const GridCell = (props: any) => {
  const content = props.title;

  {
    /*   <figure id="projectThree" class="projekteGrid" onclick="goToProjectThree()">
                        <img id="project3Home" src="https://meinhof.ch/src/zugeschnittenProject/titelNeuenburg.jpg">
                        <figcaption>
                            <h2>Wohnung<br>am See</h2>
                        </figcaption>
                    </figure> */
  }

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
