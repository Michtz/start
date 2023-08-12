import React, { useEffect } from 'react';
import ProjectContentContainer from './ContentContainer';
import Footer from '../FooterContainer';
import ProjectHeaderContainer from './ProjectHeaderContainer';
import style from '../../../styles/main.module.scss';
import BottomNavigation from '../../system/BottomNavigationProjectsContainer';
import { useLanguage } from '../../../CreateContent/LanguageProvider';

type ProjectSiteProps = {
  index: number;
};

const ProjectSiteContainer: React.FC<ProjectSiteProps> = ({ index }) => {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <ProjectHeaderContainer
        navContent={language.projects.content}
        header={language.projectSites[index].header}
        src={language.projectSites[index].src}
      />
      <main className={style['main']}>
        <ProjectContentContainer
          head={language.projectSites[index]}
          content={language.projectSites[index].content}
        />
        <hr />
        <BottomNavigation navContent={language.navigations.bottom} />
      </main>
      <Footer />
    </>
  );
};
export default ProjectSiteContainer;
