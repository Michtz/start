import React, { useContext } from 'react';
import ProjectContentContainer from '../component/ContentContainer';
import { BlogContent } from '../component/CreateContextMain';
import { Headers } from '../component/CreateContextMain';
import Footer from '../component/Footer';
import HeaderContainer from '../component/ProjectHeaderContainer';
import style from '../styles/main.module.scss';

const BueroHorw = () => {
  const blog = useContext(BlogContent);
  const titel = useContext(Headers);

  return (
    <>
      <HeaderContainer header={titel[0].header} src={titel[0].src} />
      <main className={style['main']}>
        <ProjectContentContainer head={titel[0]} content={blog[0].project} />
      </main>
      <Footer />
    </>
  );
};
export default BueroHorw;
