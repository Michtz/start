import React from 'react';
import style from '../../../styles/about.module.scss';
import HeaderBox from '../../system/HeaderBox';
import styles from '../../../styles/main.module.scss';
import { useLanguage } from '../../../CreateContent/LanguageProvider';

// static component
const Header = () => {
  const { language } = useLanguage();
  const b: boolean = language.boolean;
  return (
    <section className={style['offer-container']} id={'about'}>
      <div className={style['about-text']}>
        <div className={style['first-line']}>
          <h1>{b ? 'What' : 'Wer'}</h1>
          <h3>{b ? 'defines\u00A0us' : 'wir\u00A0sind'},</h3>
          <h1>{b ? 'Who' : 'was'}</h1>
          <h3>{b ? '' : 'uns'}</h3>
        </div>
        <div className={style['second-line']}>
          <h3>{b ? 'we\u00A0are\u00A0and' : 'ausmacht\u00A0und'}</h3>
          <h1>{b ? 'How' : 'wie'}</h1>
          <h3>{b ? 'we\u00A0work' : 'wir\u00A0arbeiten'}:</h3>
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

const AboutContainer: React.FC = () => {
  const { language } = useLanguage();
  return (
    <div className={styles['container']}>
      <HeaderBox title={language.about.title} id={language.about.id} />
      <div className={style['about-container']}>
        <div>
          <Header />
          <AboutContent content={language.about.content} />
        </div>
        <div>
          <img src="https://meinhof.ch/src/profilbild/bildJulius.jpg" />
        </div>
      </div>
    </div>
  );
};
export default AboutContainer;
