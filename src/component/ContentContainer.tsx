import React from 'react';
import PictureTextContainerSlider from './PictureTextContainerSlider';
import ProjectHeader from './ProjectHeader';
import PictureTextContainer from './PictureTextContainer';

const ContentContainer = (content: any) => {
  const blog = content.content;
  console.log(blog);
  
  return (
    <div>
      <ProjectHeader />
      <hr></hr>
      <PictureTextContainer src={blog[0].src} text={blog[0].text} />
      <PictureTextContainerSlider src={blog[1].src} src2={blog[1].src2} text={blog[1].text} />
      <PictureTextContainerSlider src={blog[2].src} src2={blog[2].src2} text={blog[2].text} right />
    </div>
  );
};
export default ContentContainer;
