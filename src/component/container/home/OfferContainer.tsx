import React from 'react';
import style from '../../../styles/offerContainer.module.scss';
import HeaderBox from '../../system/HeaderBox';
import styles from '../../../styles/main.module.scss';

type trans = {
  transparency: string;
};

const Circle: React.FC<trans> = ({ transparency }) => {
  return (
    <svg height="68" width="68">
      <circle
        cx="34"
        cy="34"
        r="30"
        stroke="#7B7373"
        strokeWidth="1.5"
        fill={`rgba(123, 115, 115,${transparency}`}
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
  const transparencyValues = ['0.05', '0.25', '0.5'];

  return (
    <div className={styles['container']}>
      <HeaderBox title={title} id={id} />
      <section className={style['offer-container']}>
        {content.map((obj: any, i: number) => (
          <div className={style['offer-item']} key={i}>
            <div>
              {Array.from({ length: i + 1 }).map((_, j) => (
                <Circle key={j} transparency={transparencyValues[j]} />
              ))}
            </div>
            <div>
              <h3>{obj.title}</h3>
              <p>{obj.content}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
export default OfferContainer;
