import React, { useContext } from 'react';
import { MainContent, ProjectGrid } from './CreateContextMain';
import style from '../styles/about.module.scss';
import HeaderBox from './HeaderBox';
import GridContainer from './GridContainer';
import styles2 from '../styles/main.module.scss';

const ProjectContainer = () => {
  const content = useContext(MainContent);
  const projects = useContext(ProjectGrid);

  return (
    <div className={styles2['container']}>
      <HeaderBox titel={content[0].project.title} id={content[0].project.id} />
      <GridContainer content={projects} />
    </div>
  );
};
export default ProjectContainer;
