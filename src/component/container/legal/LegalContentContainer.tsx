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
      {content.map((obj: any) => (
        <div>
          <h2>{obj.header}</h2>
          <ul>
            {obj.text.map((obj: any) => (
              <li>{obj}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
export default LegalContentContainer;
