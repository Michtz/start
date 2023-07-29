import React, { useContext } from 'react';
import ContentContainer from '../component/ContentContainer';
import { BlogContent, Projects } from '../component/CreateContextMain';
import { Headers } from '../component/CreateContextMain';
import Footer from '../component/Footer';
import HeaderContainer from '../component/ProjectHeaderContainer';
import style from '../styles/main.module.scss';

const StudioNeubau = () => {
  const blog = useContext(BlogContent);
  const titel = useContext(Headers);
  const navContent = useContext(Projects);

  return (
    <>
      <HeaderContainer navContent={navContent} header={titel[3].header} src={titel[3].src} />
      <main className={style['main']}>
     {/*    <ContentContainer content={blog[3].project} /> */}
      </main>
      <Footer />
    </>
  );
};
export default StudioNeubau;
