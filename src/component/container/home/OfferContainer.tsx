import React from 'react';
import style from '../../../styles/offerContainer.module.scss';
import HeaderBox from '../../system/HeaderBox';
import styles from '../../../styles/main.module.scss';
import { useLanguage } from '../../../CreateContent/LanguageProvider';

type Trans = {
  transparency: string;
};

const Circle: React.FC<Trans> = ({ transparency }) => {
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

const OfferContainer: React.FC = () => {
  const transparencyValues = ['0.05', '0.25', '0.5'];
  const { language } = useLanguage();

  return (
    <div className={styles['container']}>
      <HeaderBox title={language.offer.title} id={language.offer.id} />
      <section className={style['offer-container']}>
        {language.offer.content.map((obj: any, i: number) => (
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
