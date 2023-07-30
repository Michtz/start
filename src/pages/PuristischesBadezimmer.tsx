import React, { useContext } from 'react';
import ContentContainer from '../component/container/ContentContainer';
import { BlogContent, Projects } from '../component/CreateContextMain';
import { Headers } from '../component/CreateContextMain';
import Footer from '../component/container/FooterContainer';
import HeaderContainer from '../component/container/ProjectHeaderContainer';
import style from '../styles/main.module.scss';

const PuristischesBadezimmer = () => {
  const blog = useContext(BlogContent);
  const titel = useContext(Headers);
  const navContent = useContext(Projects);

  return (
    <>
      <HeaderContainer navContent={navContent} header={titel[2].header} src={titel[2].src} />
      <main className={style['main']}>{/* <ContentContainer content={blog[2].project} /> */}</main>
      <Footer />
    </>
  );
};
export default PuristischesBadezimmer;
