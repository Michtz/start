import React from 'react';
import ContentContainer from '../component/ContentContainer';
import Footer from '../component/Footer';
import HeaderContainer from '../component/HeaderContainer';
import style from '../styles/main.module.scss';

const BueroHorw = () => {
  return (
    <>
      <HeaderContainer />
      <main className={style['main']}>
        <ContentContainer />
      </main>
      <Footer />
    </>
  );
};
export default BueroHorw;
