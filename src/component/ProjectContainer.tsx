import React, { useContext } from 'react';
import { MainContent, Headers } from './CreateContext';
import style from '../styles/about.module.scss';
import HeaderBox from './HeaderBox';
import GridContainer from './GridContainer';

const ProjectContainer = () => {
  const content = useContext(MainContent);
  const header = useContext(Headers);

  return (
    <>
      <HeaderBox titel={content[0].project.title} id={content[0].project.id} />
      <GridContainer content={header} />
    </>
  );
};
export default ProjectContainer;
