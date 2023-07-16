import React, { useContext } from 'react';
import { MainContent } from './CreateContext';
import style from '../styles/about.module.scss';
import HeaderBox from './HeaderBox';

const Header = () => {
  return (
    <section className={style['offer-container']} id={'about'}>
      <div className={style['about-text']}>
        <div className={style['first-line']}>
          <h1>Wer</h1>
          <h3>wir&nbsp;sind,</h3>
          <h1>was</h1>
          <h3>uns</h3>
        </div>
        <div className={style['second-line']}>
          <h3>ausmacht&nbsp;und</h3>
          <h1>wie</h1>
          <h3>wir&nbsp;arbeiten:</h3>
        </div>
      </div>
    </section>
  );
};

const AboutContent = () => {
  const context = useContext(MainContent);
  return <div className={style['about-content']}>{context[0].about.content}</div>;
};

const AboutContainer = () => {
  const content = useContext(MainContent);

  return (
    <>
      <HeaderBox titel={content[0].about.title} id={content[0].about.id} />
      <div className={style['about-container']}>
        <div>
          <Header />
          <AboutContent />
        </div>
        <div>
          <img src="https://meinhof.ch/src/profilbild/bildJulius.jpg" />
        </div>
      </div>
    </>
  );
};
export default AboutContainer;
