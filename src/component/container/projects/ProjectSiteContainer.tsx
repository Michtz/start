import React, { useContext, useEffect } from 'react';
import ProjectContentContainer from './ContentContainer';
import { BlogContent, ProjectFlex, Projects } from '../../CreateContextMain';
import { Headers } from '../../CreateContextMain';
import Footer from '../FooterContainer';
import HeaderContainer from './ProjectHeaderContainer';
import style from '../../../styles/main.module.scss';
import BottomNavigation from '../../system/BottomNavigationProjectsContainer';
import { HeaderProps, NavContent } from '../../types';

type ProjectSiteProps = {
  index: number;
};

const ProjectSiteContainer: React.FC<ProjectSiteProps> = ({ index }) => {
  const blog = useContext(BlogContent);
  const titel = useContext<Array<HeaderProps>>(Headers);
  const navContent = useContext<Array<NavContent>>(Projects);
  const bottomNavContent = useContext<Array<NavContent>>(ProjectFlex);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderContainer navContent={navContent} header={titel[index].header} src={titel[index].src} />
      <main className={style['main']}>
        <ProjectContentContainer head={titel[index]} content={blog[index].project} />
        <hr />
        <BottomNavigation navContent={bottomNavContent} />
      </main>
      <Footer />
    </>
  );
};
export default ProjectSiteContainer;