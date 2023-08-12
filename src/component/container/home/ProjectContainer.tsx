import React from 'react';
import HeaderBox from '../../system/HeaderBox';
import GridContainer from '../../system/GridContainer';
import styles from '../../../styles/main.module.scss';
import { useLanguage } from '../../../CreateContent/LanguageProvider';


const ProjectContainer: React.FC = () => {
  const { language } = useLanguage();
  return (
    <div className={styles['container']}>
      <HeaderBox title={language.projects.title} id={language.projects.id} />
      <GridContainer content={language.projects.content} />
    </div>
  );
};
export default ProjectContainer;
