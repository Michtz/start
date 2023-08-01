import React from 'react';
import PictureTextContainerSlider from '../../system/PictureTextContainerSlider';
import ProjectHeader from './TitleSectionProjectContentContainer';
import PictureTextContainer from '../../system/PictureTextContainer';
import { HeaderProps } from '../../types';

interface ProjectContentProps {
  content: any;
  head: HeaderProps;
}

const ProjectContentContainer: React.FC<ProjectContentProps> = ({ head, content }) => {
  console.log(content);
  
  return (
    <div>
      <ProjectHeader content={head} />
      <hr />
      <PictureTextContainer src={content[0].src} text={content[0].text} />
      <PictureTextContainerSlider src={content[1].src} src2={content[1].src2} text={content[1].text} />
      <PictureTextContainerSlider
        src={content[2].src}
        src2={content[2].src2}
        text={content[2].text}
        right
      />
    </div>
  );
};
export default ProjectContentContainer;
