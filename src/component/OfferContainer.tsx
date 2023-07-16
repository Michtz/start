import React, { useContext } from 'react';
import { MainContent } from './CreateContext';
import style from '../styles/offerContainer.module.scss';
import HeaderBox from './HeaderBox';

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
    <>
      <HeaderBox titel={context[0].offerTest.title} id={context[0].offerTest.id} />

      <section className={style['offer-container']}>
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
        {content.map((items: any, i: number) => (
          <div key={i}>
            <h3>{items.title}</h3>
            <div>{items.content}</div>
          </div>
        ))}
      </section>
    </>
  );
};
export default OfferContainer;
