import { useLanguage } from '../../CreateContent/LanguageProvider';
import style from '../../styles/button.module.scss'

export const LangageButton: React.FC = () => {
  const { switchLanguage, language } = useLanguage();

  const handleClick = () => {
    if (language.language === 'de') {
      switchLanguage('en');
    } else {
      switchLanguage('de');
    }
  };

  return (
    <div className={style['language-button']}>
      <a key={6} onClick={handleClick}>
        <div className={language.language !== 'en' ? style['skinny'] : style['fat']}>en</div>|
        <div className={language.language !== 'de' ? style['skinny'] : style['fat']}>de</div>
      </a>
    </div>
  );
};
