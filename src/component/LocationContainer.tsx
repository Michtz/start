import React, { useContext } from 'react';
import { MainContent } from './CreateContext';
import style from '../styles/location.module.scss';
import HeaderBox from './HeaderBox';

const LocationContainer = () => {
  const content = useContext(MainContent);

  return (
    <>
      <HeaderBox titel={content[0].location.title} id={content[0].location.id} />
      <iframe
        className={style['google-map']}
        src="https://maps.google.com/maps?q=Horw%2C%20Grisigenstrasse%2012&amp;t=m&amp;z=16&amp;output=embed&amp;iwloc=near"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};
export default LocationContainer;
