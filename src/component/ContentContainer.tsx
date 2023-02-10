import React, { useContext } from "react";
import PictureRTextContainer from "./PictureRTextContainer";
import PictureTextContainer from "./PictureTextContainer";
import ProjectHeader from "./ProjectHeader";
import { BlogContent } from "./CreateContext";



const ContentContainer = () => {

    const blog = useContext(BlogContent);
console.log(blog);

  return <div>
      <ProjectHeader />
      <PictureTextContainer src={blog[0].src} src2={blog[2].src2} text={blog[0].text} right={true} />
      <PictureRTextContainer src={blog[1].src} src2={blog[1].src2} text={blog[1].text}/>
      <PictureTextContainer src={blog[2].src} src2={blog[2].src2} text={blog[2].text}/>

  </div>;
};
export default ContentContainer;

