import React, { useContext } from 'react';
import { MainContent, ProjectGrid } from './CreateContextMain';
import HeaderBox from './system/HeaderBox';
import GridContainer from './GridContainer';
import styles from '../styles/main.module.scss';
import { ProjectProps } from './types';

interface ProjectContainerProps {
  id: string;
  title: string;
  content: ProjectProps[];
}

const ProjectContainer: React.FC<ProjectContainerProps> = ({ id, title, content }) => {
  return (
    <div className={styles['container']}>
      <HeaderBox title={title} id={id} />
      <GridContainer content={content} />
    </div>
  );
};
export default ProjectContainer;
