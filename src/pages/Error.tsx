import { Logo } from '../component/system/Logo';
import style from '../styles/error.module.scss';
import { useLanguage } from '../CreateContent/LanguageProvider';
import { LangageButton } from '../component/system/LanguageButton';

const Error: React.FC = () => {
  const { language } = useLanguage();
  return (
    <div className={style['error-container']}>
      <LangageButton/>
      <Logo />
      <h1>{language.error.title}</h1>
      <h3>{language.error.content}</h3>
    </div>
  );
};

export default Error;
