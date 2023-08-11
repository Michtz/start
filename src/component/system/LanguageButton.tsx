import style from '../../styles/button.module.scss';

interface LanguageButtonProps {
  currentLanguage?: 'en' | 'de';
  toggleLanguage: () => void;
}

export const LangageButton: React.FC<LanguageButtonProps> = ({ currentLanguage, toggleLanguage }) => {
  return (
    <div className={style['language-button']}>
      <a key={6} onClick={toggleLanguage}>
        <div className={currentLanguage !== 'en' ? style['skinny'] : style['fat']}>en</div>|
        <div className={currentLanguage !== 'de' ? style['skinny'] : style['fat']}>de</div>
      </a>
    </div>
  );
};
