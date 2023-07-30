import React, { useContext, useEffect } from 'react';
import ProjectContentContainer from '../component/ContentContainer';
import { BlogContent, ProjectFlex, Projects } from '../component/CreateContextMain';
import { Headers } from '../component/CreateContextMain';
import Footer from '../component/Footer';
import HeaderContainer from '../component/ProjectHeaderContainer';
import style from '../styles/main.module.scss';
import BottomNavigation from '../component/system/BottomNavigationProjectsContainer';
export interface NavContent {
  header: string;
  src: string;
  path: string;
}
const BueroHorw = () => {
  const blog = useContext(BlogContent);
  const titel = useContext(Headers);

  const navContent = useContext<Array<NavContent>>(Projects);
  const bottomNavContent = useContext(ProjectFlex);

  console.log(bottomNavContent);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeaderContainer navContent={navContent} header={titel[0].header} src={titel[0].src} />
      <main className={style['main']}>
        <ProjectContentContainer head={titel[0]} content={blog[0].project} />
        <hr />
        <BottomNavigation navContent={bottomNavContent} />
      </main>
      <Footer />
    </>
  );
};
export default BueroHorw;
