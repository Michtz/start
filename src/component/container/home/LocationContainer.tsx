import React from 'react';
import style from '../../../styles/location.module.scss';
import HeaderBox from '../../system/HeaderBox';
import styles from '../../../styles/main.module.scss';
import { useLanguage } from '../../../CreateContent/LanguageProvider';

const LocationContainer: React.FC = () => {
  const { language } = useLanguage();
  return (
    <div className={styles['container']}>
      <HeaderBox title={language.location.title} id={language.location.id} />
      <div className={style['location-container']}>
        <iframe
          className={style['google-map']}
          style={{ filter: 'grayscale(100%)' }}
          src="https://maps.google.com/maps?q=Horw%2C%20Grisigenstrasse%2012&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={style['adress-container']}>
          <div>
            <h2>{language.location.content[0].title}:</h2>
            {language.location.content[0].content.map((obj: any, i: number) => (
              <p key={i}>{obj}</p>
            ))}
          </div>

          <div className={style['contact']}>
            <h2>{language.location.content[1].title}:</h2>
            {language.location.content[1].content.map((obj: any, i: number) => (
              <p key={i}>{obj}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LocationContainer;
