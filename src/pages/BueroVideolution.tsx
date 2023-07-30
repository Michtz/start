import React, { useContext, useEffect } from 'react';
import ProjectContentContainer from '../component/container/ContentContainer';
import { BlogContent, Projects } from '../component/CreateContextMain';
import { Headers } from '../component/CreateContextMain';
import Footer from '../component/container/FooterContainer';
import HeaderContainer from '../component/container/ProjectHeaderContainer';
import style from '../styles/main.module.scss';

const BueroVideolution = () => {
  const blog = useContext(BlogContent);
  const titel = useContext(Headers);
  const navContent = useContext(Projects);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeaderContainer navContent={navContent} header={titel[1].header} src={titel[1].src} />
      <main className={style['main']}>
        <ProjectContentContainer head={titel[1]} content={blog[1].project} />
      </main>
      <Footer />
    </>
  );
};
export default BueroVideolution;
