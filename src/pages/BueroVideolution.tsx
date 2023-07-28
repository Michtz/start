import React, { useContext } from 'react';
import ContentContainer from '../component/ContentContainer';
import { BlogContent } from '../component/CreateContext';
import { Headers } from '../component/CreateContext';
import Footer from '../component/Footer';
import HeaderContainer from '../component/ProjectHeaderContainer';
import style from '../styles/main.module.scss';

const BueroVideolution = () => {
  const blog = useContext(BlogContent);
  const titel = useContext(Headers);
  console.log(titel);
  console.log(blog);
  return (
    <>
      <HeaderContainer header={titel[1].header} src={titel[1].src} />
      <main className={style['main']}>
        <ContentContainer content={blog[1].project} />
      </main>
      <Footer />
    </>
  );
};
export default BueroVideolution;
