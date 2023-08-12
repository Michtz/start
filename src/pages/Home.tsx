import AboutContainer from '../component/container/home/AboutContainer';
import DreieckComponent from '../component/system/DreieckComponent';
import Footer from '../component/container/FooterContainer';
import HomeHeaderContainer from '../component/container/home/HomeHeaderContainer';
import OfferContainer from '../component/container/home/OfferContainer';
import ProjectContainer from '../component/container/home/ProjectContainer';
import LocationContainer from '../component/container/home/LocationContainer';
import CustomersAndClients from '../component/container/home/CustomersAndClientsContainer';
import { ScrolbarRemover } from '../component/functions/function';
import LoadingOverlay from '../component/functions/onLoadFunction';

const Home = () => {
  ScrolbarRemover();
  return (
    <>
      <LoadingOverlay />
      <HomeHeaderContainer />
      <OfferContainer />
      <DreieckComponent />
      <ProjectContainer />
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
