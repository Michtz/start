import React, { useEffect, useState } from 'react';
import style from '../../styles/piTe.module.scss';
import { PictureModal, handleKeyDown, imgChanger, scrollControl } from '../functions/function';

interface Props {
  src?: string | undefined;
  src2?: string | undefined;
  text?: string;
  right?: boolean;
}

const PictureTextContainerSlider: React.FC<Props> = ({ src, src2, text, right }): JSX.Element => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [modal, setModal] = useState(false);

  const [isFadeOut2, setIsFadeOut2] = useState(false);

  const [showImg2, setShowImg2] = useState(false);

  handleKeyDown(setModal);
  /*   imgChanger(modal, setImage, image, setIsFading); */
  scrollControl(modal, document);
/*   useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('modalTest');
      if (!modal) {
        console.log('changeImg');
        setImage2(!image2);
        console.log('showImg2');
        setShowImg2(!showImg2);
        setTimeout(() => {
          console.log('isFadeOut2');
          setIsFadeOut2(!isFadeOut2);
          setTimeout(() => {
            console.log('changeImg');
            setImage2(!image2);
          }, 1200);
        }, 2000);
      }
    })
    return () => {
      clearInterval(intervalId); // Aufräumen bei Unmounting
    };

}, []) */

  return (
    <div className={style['contribution-container']}>
      {right && (
        <div>
          <img
            onClick={() => setModal(true)}
            className={style['projekt-pictures']}
            src={image1 ? src2 : src}
          />
          <img
            onClick={() => setModal(true)}
            className={style[isFadeOut2 ? 'projekt-pictures-fade' : 'projekt-pictures']}
            src={image2 ? src2 : src}
          />
        </div>
      )}

      <p className={style['projektText']}>{text}</p>
      {!right && (
        <img
          onClick={() => setModal(true)}
          className={style['projekt-pictures']}
          src={image1 ? src : src2}
        />
      )}

      {modal && (
        <div onClick={() => setModal(false)}>
          <PictureModal image={image1 ? src : src2} />
        </div>
      )}
    </div>
  );
};
export default PictureTextContainerSlider;
