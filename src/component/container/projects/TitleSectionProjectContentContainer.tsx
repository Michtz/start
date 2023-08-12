import React from 'react';
import style from '../../../styles/projectHead.module.scss';
import { HeaderProps } from '../../types';
import { useLanguage } from '../../../CreateContent/LanguageProvider';

const TitlesectionProjects: React.FC<HeaderProps> = ({ art, size, concept, ethos, requirements }) => {
  const { language } = useLanguage();
  const l: boolean = language.boolean;
  return (
    <div className={style['head-project-content']}>
      <div>
        <h2>{l ? 'Project type' : 'Projektart'}:</h2>
        <p>{art}</p>
      </div>
      <div>
        <h2>{l ? 'Project size' : 'Projektgrösse'}:</h2>
        <p>{size}</p>
      </div>
      <div>
        <h2>{l ? 'Concept' : 'Konzept'}:</h2>
        <p>{concept}</p>
      </div>
      <div>
        <h2>{l ? 'Designethos' : 'Designethos'}:</h2>
        <p>{ethos}</p>
      </div>
      <div>
        <h2>{l ? 'Requirements' : 'Ansprüche'}:</h2>
        <ul>
          {requirements.map((content: string, index: number): JSX.Element => {
            return <li key={index}>{content}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};
export default TitlesectionProjects;
