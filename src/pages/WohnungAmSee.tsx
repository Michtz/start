import React, { useContext } from 'react';
import ContentContainer from '../component/container/ContentContainer';
import { BlogContent, Projects } from '../component/CreateContextMain';
import { Headers } from '../component/CreateContextMain';
import Footer from '../component/container/FooterContainer';
import HeaderContainer from '../component/container/ProjectHeaderContainer';
import style from '../styles/main.module.scss';

const WohnungAmSee = () => {
  const blog = useContext(BlogContent);
  const titel = useContext(Headers);
  const navContent = useContext(Projects);

  return (
    <>
      <HeaderContainer navContent={navContent} header={titel[4].header} src={titel[4].src} />
      <main className={style['main']}>
        {/*         <ContentContainer content={blog[4].project} /> */}
      </main>
      <Footer />
    </>
  );
};
export default WohnungAmSee;
