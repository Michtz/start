import React, { useContext } from 'react';
import PictureTextContainer from './PictureTextContainer';
import ProjectHeader from './ProjectHeader';
import { BlogContent } from './CreateContext';

const ContentContainer = () => {
  const blog = useContext(BlogContent);
  console.log(blog);

  return (
    <div>
      <ProjectHeader />
      <PictureTextContainer src={blog[0].src} src2={blog[2].src2} text={blog[0].text} right />
      <PictureTextContainer src={blog[2].src} src2={blog[2].src2} text={blog[2].text} />
    </div>
  );
};
export default ContentContainer;
