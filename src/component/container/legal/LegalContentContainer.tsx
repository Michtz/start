import React from 'react';
import style from '../../../styles/legal.module.scss';

interface HeaderProps {
  content?: {
    header?: string;
    src?: string;
    path?: string;
  }[];
}

const LegalContentContainer: React.FC<HeaderProps> = ({ content }) => {
  return (
    <div className={style['legal-container']}>
      {content.map((obj: any, i: number) => (
        <div key={i}>
          <h2>{obj.header}</h2>
          <ul>
            {obj.text.map((obj: any, i: number) => (
              <li key={i}>{obj}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default LegalContentContainer;
