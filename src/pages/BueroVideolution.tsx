import React, { useContext } from 'react';
import ProjectContentContainer from '../component/ContentContainer';
import { BlogContent } from '../component/CreateContextMain';
import { Headers } from '../component/CreateContextMain';
import Footer from '../component/Footer';
import HeaderContainer from '../component/ProjectHeaderContainer';
import style from '../styles/main.module.scss';

const BueroVideolution = () => {
  const blog = useContext(BlogContent);
  const titel = useContext(Headers);
  console.log(blog[1].project);
  return (
    <>
      <HeaderContainer header={titel[1].header} src={titel[1].src} />
      <main className={style['main']}>
        <ProjectContentContainer head={titel[1]} content={blog[1].project} />
      </main>
      <Footer />
    </>
  );
};
export default BueroVideolution;
