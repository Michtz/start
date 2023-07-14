import React, { useContext } from 'react';
import ContentContainer from '../component/ContentContainer';
import { BlogContent } from '../component/CreateContext';
import { Headers } from '../component/CreateContext';
import Footer from '../component/Footer';
import HeaderContainer from '../component/HeaderContainer';
import style from '../styles/main.module.scss';

const PuristischesBadezimmer = () => {
  const blog = useContext(BlogContent);
  const titel = useContext(Headers);

  return (
    <>
      <HeaderContainer content={titel[2].header} />
      <main className={style['main']}>
        <ContentContainer content={blog[2].project} />
      </main>
      <Footer />
    </>
  );
};
export default PuristischesBadezimmer;