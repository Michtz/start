import React, { useContext } from 'react';
import ContainerComponent from './ContainerComponent';
import { MainContent } from './CreateContext';
import style from '../styles/offerContainer.module.scss';

const Circle = (transparency: any) => {
  return (
    <svg height="68" width="68">
      <circle
        cx="34"
        cy="34"
        r="30"
        stroke="#7B7373"
        strokeWidth="1.5"
        fill={`rgba(123, 115, 115,${transparency.transparency}`}
      />
    </svg>
  );
};

const OfferContainer = () => {
  const context = useContext(MainContent);
  const title = context[0].offer[0].title;
  const content = context[0].offer[0].content;
  return (
    <section className={style['offer-container']}>
      <h2>{title}</h2>
      <div>
        <Circle transparency={'0.5'} />
      </div>
      <div>
        <Circle transparency={'0.25'} />
        <Circle transparency={'0.5'} />
      </div>
      <div>
        <Circle transparency={'0.05'} />
        <Circle transparency={'0.25'} />
        <Circle transparency={'0.5'} />
      </div>
      {content.map((items: any) => (
        <div>
          <h3>{items.title}</h3>
          <div>{items.content}</div>
        </div>
      ))}
    </section>
  );
};
export default OfferContainer;
