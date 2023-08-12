import HeaderBox from '../../system/HeaderBox';
import SliderContainer from '../../system/SliderClients';
import styles from '../../../styles/main.module.scss';
import { useLanguage } from '../../../CreateContent/LanguageProvider';

const CustomersAndClients: React.FC = () => {
  const { language } = useLanguage();
  const Images: string[] = language.customersAndClients.content?.map((content) => content.src);
  return (
    <div className={styles['container']}>
      <HeaderBox title={language.customersAndClients.title} id={language.customersAndClients.id} />
      <SliderContainer src={Images} />
    </div>
  );
};
export default CustomersAndClients;
