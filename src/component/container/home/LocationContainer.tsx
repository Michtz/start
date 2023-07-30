import React from 'react';
import style from '../../../styles/location.module.scss';
import HeaderBox from '../../system/HeaderBox';
import styles from '../../../styles/main.module.scss';

interface HeaderBoxProps {
  title: string;
  id: string;
}

const LocationContainer: React.FC<HeaderBoxProps> = ({ id, title }) => {
  return (
    <div className={styles['container']}>
      <HeaderBox title={title} id={id} />
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
            <h2>Adresse:</h2>
            <p>Herr</p>
            <p>Julius Meinhof</p>
            <p className={style['tel']}>Tel: +41 78 971 50 31</p>
            <p className={style['mail']}>E-Mail: julius@meinhof.ch</p>
          </div>

          <div className={style['google']}>
            <h2>Kontakt:</h2>
            <p>Grisigenstrasse 12</p>
            <p>6048 Horw</p>
            <p>Luzern</p>
            <p>Schweiz (CH)</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LocationContainer;
