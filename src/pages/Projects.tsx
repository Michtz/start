import ProjectSiteContainer from '../component/container/ProjectSiteContainer';
// Function to add a new projekt page
const createProjectSite = (index: number) => () => <ProjectSiteContainer index={index} />;

// Components for export
export const BueroHorw = createProjectSite(0);
export const BueroVideolution = createProjectSite(1);
export const PuristischesBadezimmer = createProjectSite(2);
export const StudioNeubau = createProjectSite(3);
export const WohnungAmSee = createProjectSite(4);
