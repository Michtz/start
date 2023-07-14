import React, { useContext } from 'react';
import AboutContainer from '../component/AboutContainer';
import ContainerComponent from '../component/ContainerComponent';
import ContentContainer from '../component/ContentContainer';
import { BlogContent } from '../component/CreateContext';
import { Headers } from '../component/CreateContext';
import DreieckComponent from '../component/DreieckComponent';
import Footer from '../component/Footer';
import GridContainer from '../component/GridContainer';
import HomeHeaderContainer from '../component/HomeHeaderContainer';
import OfferContainer from '../component/OfferContainer';
import { Divide as Hamburger } from 'hamburger-react';
import VerticalSlider from '../component/VerticalSlider';
import { Menu } from '../component/Menu';

const Home = () => {
  const blog = useContext(BlogContent);
  const titel = 'INTERIOR DESIGN WITH IDENTITY';
  const content = useContext(Headers);

  return (
    <>
      <HomeHeaderContainer content={titel} />
      <GridContainer content={content} />
      <DreieckComponent />
      <OfferContainer />
      <DreieckComponent />
      <AboutContainer />
      <DreieckComponent />
      kunden und partner
      <DreieckComponent />
      standort
      <Footer />
    </>
  );
};
export default Home;
