import React from 'react';
import style from '../../styles/about.module.scss';
import HeaderBox from '../system/HeaderBox';
import styles2 from '../../styles/main.module.scss';

// static component
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

interface AboutContentProps {
  title?: string;
  content: string;
  id?: string;
}

const AboutContent: React.FC<AboutContentProps> = ({ content }) => {
  return <div className={style['about-content']}>{content}</div>;
};

const AboutContainer: React.FC<AboutContentProps> = ({ content, title, id }) => {
  return (
    <div className={styles2['container']}>
      <HeaderBox title={title} id={id} />
      <div className={style['about-container']}>
        <div>
          <Header />
          <AboutContent content={content} />
        </div>
        <div>
          <img src="https://meinhof.ch/src/profilbild/bildJulius.jpg" />
        </div>
      </div>
    </div>
  );
};
export default AboutContainer;
