import { useContext } from 'react';
import AboutContainer from '../component/AboutContainer';
import { ClientsAndCustomers, MainContent, ProjectGrid, Projects } from '../component/CreateContextMain';
import DreieckComponent from '../component/DreieckComponent';
import Footer from '../component/Footer';
import HomeHeaderContainer from '../component/HomeHeaderContainer';
import OfferContainer from '../component/OfferContainer';
import ProjectContainer from '../component/ProjectContainer';
import LocationContainer from '../component/LocationContainer';
import CustomersAndClients from '../component/CustomersAndClientsContainer';
import { ClientsProps } from '../component/types';

const Home = () => {
  // ToDo Add Types
  const titel = 'INTERIOR DESIGN WITH IDENTITY';
  const projects = useContext(Projects);
  const projectsGrid = useContext(ProjectGrid);
  const mainContent = useContext(MainContent);
  const clients = useContext<ClientsProps[]>(ClientsAndCustomers);
  const customerContent = clients?.map((client) => client.src);

  return (
    <>
      <HomeHeaderContainer navContent={projects} content={titel} />
      <ProjectContainer
        id={mainContent[0].project.id}
        title={mainContent[0].project.title}
        content={projectsGrid}
      />
      <DreieckComponent />
      <OfferContainer
        id={mainContent[0].offer.id}
        title={mainContent[0].offer.title}
        content={mainContent[0].offer.content}
      />
      <DreieckComponent />
      <AboutContainer
        content={mainContent[0].about.content}
        id={mainContent[0].about.id}
        title={mainContent[0].about.title}
      />
      <DreieckComponent />
      <CustomersAndClients
        id={mainContent[0].customersAndClients.title}
        title={mainContent[0].customersAndClients.title}
        src={customerContent}
      />
      <DreieckComponent />
      <LocationContainer id={mainContent[0].location.id} title={mainContent[0].location.title} />
      <Footer />
    </>
  );
};
export default Home;
