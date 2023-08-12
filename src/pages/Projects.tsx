import ProjectSiteContainer from '../component/container/projects/ProjectSiteContainer';
// Function to add a new projekt page
const createProjectSite = (index: number) => () => <ProjectSiteContainer index={index} />;

// Components for export
export const BueroHorw: React.FC = createProjectSite(0);
export const BueroVideolution: React.FC = createProjectSite(1);
export const PuristischesBadezimmer: React.FC = createProjectSite(2);
export const StudioNeubau: React.FC = createProjectSite(3);
export const WohnungAmSee: React.FC = createProjectSite(4);
