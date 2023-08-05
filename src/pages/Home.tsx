import { useContext, useEffect, useState } from 'react';
import AboutContainer from '../component/container/home/AboutContainer';
import { MainContent, ProjectGrid, Projects } from '../CreateContent/de/content/CreateContext';
import DreieckComponent from '../component/system/DreieckComponent';
import Footer from '../component/container/FooterContainer';
import HomeHeaderContainer from '../component/container/home/HomeHeaderContainer';
import OfferContainer from '../component/container/home/OfferContainer';
import ProjectContainer from '../component/container/home/ProjectContainer';
import LocationContainer from '../component/container/home/LocationContainer';
import CustomersAndClients from '../component/container/home/CustomersAndClientsContainer';
import { ClientsProps } from '../component/types';
import { MainContentEnglisch } from '../CreateContent/en/content/CreateContext.EN';
import { ClientsAndCustomers } from '../CreateContent/de/assets/assets';
import { ScrolbarRemover } from '../component/functions/function';
import LoadingOverlay from '../component/functions/onLoadFunction';

const Home = () => {
  // ToDo Add Types
  const projects = useContext(Projects);
  const projectsGrid = useContext(ProjectGrid);
  const mainContentEnglish = useContext(MainContentEnglisch);
  const mainContentGerman = useContext(MainContent);

  const [mainContent, setMainContet] = useState<any>(mainContentEnglish);

  const clients = useContext<ClientsProps[]>(ClientsAndCustomers);
  const customerContent = clients?.map((client) => client.src);

  ScrolbarRemover();

  const [browserLanguage, setBrowserLanguage] = useState(navigator.language);

  useEffect((): any => {
    if (browserLanguage.includes('de')) {
      return setMainContet(mainContentGerman);
    }
  }, [browserLanguage]);

  const handleLanguageChange = () => {
    setBrowserLanguage('de');
  };

  return (
    <div onClick={handleLanguageChange}>
      <LoadingOverlay />
      <HomeHeaderContainer navContent={projects} />
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
    </div>
  );
};
export default Home;
