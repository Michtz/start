import { useContext } from 'react';
import AboutContainer from '../component/AboutContainer';
import { BlogContent } from '../component/CreateContext';
import { Headers } from '../component/CreateContext';
import DreieckComponent from '../component/DreieckComponent';
import Footer from '../component/Footer';
import HomeHeaderContainer from '../component/HomeHeaderContainer';
import OfferContainer from '../component/OfferContainer';
import ProjectContainer from '../component/ProjectContainer';
import LocationContainer from '../component/LocationContainer';
import CustomersAndClients from '../component/CustomersAndClientsContainer';

const Home = () => {
  const blog = useContext(BlogContent);
  const titel = 'INTERIOR DESIGN WITH IDENTITY';
  const content = useContext(Headers);

  return (
    <>
      <HomeHeaderContainer content={titel} />
      <ProjectContainer />
      <DreieckComponent />
      <OfferContainer />
      <DreieckComponent />
      <AboutContainer />
      <DreieckComponent />
      <CustomersAndClients />
      <DreieckComponent />
      <LocationContainer />
      <Footer />
    </>
  );
};
export default Home;
