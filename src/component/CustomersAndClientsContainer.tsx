import React, { useContext } from 'react';
import { MainContent, Headers } from './CreateContext';
import style from '../styles/about.module.scss';
import HeaderBox from './HeaderBox';
import GridContainer from './GridContainer';
import SliderContainer from './Slider';

const CustomersAndClients = () => {
  const content = useContext(MainContent);
  const header = useContext(Headers);

  return (
    <>
          <HeaderBox titel={content[0].customersAndClients.title} id={content[0].customersAndClients.id} />
          <SliderContainer />
    </>
  );
};
export default CustomersAndClients;
