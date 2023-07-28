import React, { useContext } from 'react';
import ContentContainer from '../component/ContentContainer';
import { BlogContent } from '../component/CreateContext';
import { Headers } from '../component/CreateContext';
import Footer from '../component/Footer';
import HeaderContainer from '../component/ProjectHeaderContainer';
import style from '../styles/main.module.scss';

const WohnungAmSee = () => {
  const blog = useContext(BlogContent);
  const titel = useContext(Headers);

  return (
    <>
      <HeaderContainer header={titel[4].header} src={titel[4].src} />
      <main className={style['main']}>
        <ContentContainer content={blog[4].project} />
      </main>
      <Footer />
    </>
  );
};
export default WohnungAmSee;
