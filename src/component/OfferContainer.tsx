import React, { useContext } from 'react';
import { MainContent } from './CreateContextMain';
import style from '../styles/offerContainer.module.scss';
import HeaderBox from './system/HeaderBox';
import styles from '../styles/main.module.scss';

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

interface OfferContentProps {
  title: string;
  id: string;
  content: {
    title: string;
    content: string;
  }[];
}

const OfferContainer: React.FC<OfferContentProps> = ({ id, title, content }) => {
  return (
    <div className={styles['container']}>
      <HeaderBox title={title} id={id} />

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
        {content.map((obj: any, i: number) => (
          <div key={i}>
            <h3>{obj.title}</h3>
            <div>{obj.content}</div>
          </div>
        ))}
      </section>
    </div>
  );
};
export default OfferContainer;
