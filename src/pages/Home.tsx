import { useContext, useEffect, useState } from 'react';
import AboutContainer from '../component/container/home/AboutContainer';
import {
  NavContent,
  MainContent,
  ProjectGrid,
  Projects
} from '../CreateContent/de/content/CreateContext';

import DreieckComponent from '../component/system/DreieckComponent';
import Footer from '../component/container/FooterContainer';
import HomeHeaderContainer from '../component/container/home/HomeHeaderContainer';
import OfferContainer from '../component/container/home/OfferContainer';
import ProjectContainer from '../component/container/home/ProjectContainer';
import LocationContainer from '../component/container/home/LocationContainer';
import CustomersAndClients from '../component/container/home/CustomersAndClientsContainer';
import { ClientsProps } from '../component/types';
import { ClientsAndCustomers } from '../CreateContent/de/assets/assets';
import { ScrolbarRemover } from '../component/functions/function';
import LoadingOverlay from '../component/functions/onLoadFunction';
import { log } from 'console';
import {
  NavContentEN,
  MainContentEN,
  ProjectGridEN,
  ProjectsEN
} from '../CreateContent/en/content/CreateContext.EN';

export function handleLanguageChange(setBrowserLanguage) {
  setBrowserLanguage('de');
}

const Home = () => {
 
  const projectsGridEN = useContext(ProjectGridEN);
  const mainContentEN = useContext(MainContentEN);
  const navContentEN = useContext(NavContentEN);

  const projectsGridDE = useContext(ProjectGrid);
  const mainContentDE = useContext(MainContent);
  const navContentDE = useContext(NavContent);
  
  const clients = useContext<ClientsProps[]>(ClientsAndCustomers);
  const customerContent = clients?.map((client) => client.src);

  const [projectsGrid, setProjectsGrid] = useState<any>(projectsGridEN);
  const [mainContent, setMainContet] = useState<any>(mainContentEN);
  const [navContent, setNavContent] = useState<any>(navContentEN);
  const [browserLanguage, setBrowserLanguage] = useState(navigator.language);
  ScrolbarRemover();

  useEffect((): any => {
    if (browserLanguage.includes('de')) {
      setMainContet(mainContentDE);
      setProjectsGrid(projectsGridDE);
      setNavContent(navContentDE)
    }

    if (browserLanguage.includes('en')) {
      setMainContet(mainContentEN);
      setProjectsGrid(projectsGridEN);
      setNavContent(navContentEN)
    }
  }, [browserLanguage]);

  const toggleLanguage = () => {
    setBrowserLanguage((prevLang) => (prevLang === 'en' ? 'de' : 'en'));
  };

  return (
    <div>
      <LoadingOverlay />
      <HomeHeaderContainer
        currentLanguage={browserLanguage}
        languageButton={toggleLanguage}
        navContent={navContent}
      />
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
