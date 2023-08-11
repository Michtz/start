import react from 'react';
import HeaderBox from './HeaderBox';
import HeaderContainerProjects from '../container/legal/LegalHeaderContainer';
import LegalHeaderContainer from '../container/legal/LegalHeaderContainer';
import LegalContentContainer from '../container/legal/LegalContentContainer';
import Footer from '../container/FooterContainer';

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
    <div style={{ minHeight: '100vh' }}>
      <LegalHeaderContainer navContent={navContent} title={title} />
      <LegalContentContainer content={content} />
      <Footer fixed />
    </div>
  );
};
export default Container;
