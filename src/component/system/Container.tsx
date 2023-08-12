import LegalHeaderContainer from '../container/legal/LegalHeaderContainer';
import LegalContentContainer from '../container/legal/LegalContentContainer';
import Footer from '../container/FooterContainer';
import style from '../../styles/legal.module.scss';

interface ContainerProps {
  title: string;
  content?: {
    header?: string;
    path?: string;
  }[];
  navContent?: {
    header?: string;
    src?: string;
    path?: string;
  }[];
}

const Container: React.FC<ContainerProps> = ({ navContent, content, title }) => {
  console.log(content);

  return (
    <div className={style['legal-container-container']}>
      <LegalHeaderContainer navContent={navContent} title={title} />
      <LegalContentContainer content={content} />
      <Footer fixed />
    </div>
  );
};
export default Container;
