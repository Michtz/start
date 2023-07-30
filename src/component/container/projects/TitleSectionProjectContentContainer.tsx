import React from 'react';
import style from '../../../styles/projectHead.module.scss';

interface ProjectHeaderProps {
  content: {
    header: string;
    src: string;
    path: string;
    art: string;
    groese: string;
    konzept: string;
    etos: string;
    anspruch: string[];
  };
}

const TitlesectionProjects: React.FC<ProjectHeaderProps> = ({ content }) => {
  return (
    <div className={style['head-project-content']} >
      <div>
        <h2>Projektart:</h2>
        <p>{content.art}</p>
      </div>
      <div>
        <h2>Projektgrösse:</h2>
        <p>{content.groese}</p>
      </div>
      <div>
        <h2>Konzept:</h2>
        <p>{content.konzept}</p>
      </div>
      <div>
        <h2>Designethos:</h2>
        <p>{content.etos}</p>
      </div>
      <div>
        <h2>Ansprüche:</h2>
        <ul>
          {content.anspruch.map((content: string, index:number): JSX.Element => {
            return <li key={index}>{content}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default TitlesectionProjects;
