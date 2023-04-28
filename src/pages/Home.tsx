import React, { useContext } from 'react';
import ContentContainer from '../component/ContentContainer';
import { BlogContent } from '../component/CreateContext';
import { Headers } from '../component/CreateContext';
import Footer from '../component/Footer';
import GridContainer from '../component/GridContainer';
import HomeHeaderContainer from '../component/HomeHeaderContainer';




import VerticalSlider from '../component/VerticalSlider';

const Home = () => {
  const blog = useContext(BlogContent);
  const titel = 'INTERIOR DESIGN WITH IDENTITY';
  const content = useContext(Headers);

  return (
    <>
      <HomeHeaderContainer content={titel} />
      <GridContainer content={content} />
      <VerticalSlider content={content} />
      <Footer />
    </>
  );
};
export default Home;
