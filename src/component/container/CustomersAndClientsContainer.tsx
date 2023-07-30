import HeaderBox from '../system/HeaderBox';
import SliderContainer from '../system/SliderClients';
import styles from '../../styles/main.module.scss';

interface ClientsProps {
  title: string;
  src: string[];
  id: string;
}

const CustomersAndClients: React.FC<ClientsProps> = ({ title, src, id }) => {
  return (
    <div className={styles['container']}>
      <HeaderBox title={title} id={id} />
      <SliderContainer src={src} />
    </div>
  );
};
export default CustomersAndClients;
