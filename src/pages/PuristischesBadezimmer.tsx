import React, { useContext } from 'react';
import ContentContainer from '../component/ContentContainer';
import { BlogContent } from '../component/CreateContext';
import { Headers } from '../component/CreateContext';
import Footer from '../component/Footer';
import HeaderContainer from '../component/ProjectHeaderContainer';
import style from '../styles/main.module.scss';

const PuristischesBadezimmer = () => {
  const blog = useContext(BlogContent);
  const titel = useContext(Headers);

  return (
    <>
      <HeaderContainer header={titel[2].header} src={titel[2].src} />
      <main className={style['main']}>
        <ContentContainer content={blog[2].project} />
      </main>
      <Footer />
    </>
  );
};
export default PuristischesBadezimmer;
