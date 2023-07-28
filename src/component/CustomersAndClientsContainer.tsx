import React, { useContext } from 'react';
import { MainContent, Headers } from './CreateContextMain';
import style from '../styles/about.module.scss';
import HeaderBox from './HeaderBox';
import SliderContainer from './Slider';
import styles2 from '../styles/main.module.scss';

const CustomersAndClients = () => {
  const content = useContext(MainContent);
  const header = useContext(Headers);

  return (
    <div className={styles2['container']}>
      <HeaderBox titel={content[0].customersAndClients.title} id={content[0].customersAndClients.id} />
      <SliderContainer />
    </div>
  );
};
export default CustomersAndClients;
