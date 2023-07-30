import React, { useState } from 'react';
import style from '../../styles/piTe.module.scss';
import { PictureModal, handleKeyDown, imgChanger, scrollControl } from '../functions/function';

interface Props {
  src?: string | undefined;
  src2?: string | undefined;
  text?: string;
  right?: boolean;
}

const PictureTextContainerSlider: React.FC<Props> = ({ src, src2, text, right }): JSX.Element => {
  const [image, setImage] = useState(true);
  const [modal, setModal] = useState(false);

  handleKeyDown(setModal);
  imgChanger(modal, setImage, image);
  scrollControl(modal, document);

  return (
    <div className={style['contribution-container']}>
      {right && (
        <img
          onClick={() => setModal(true)}
          className={style['projekt-pictures']}
          src={image ? src : src2}
        />
      )}
      <p className={style['projektText']}>{text}</p>
      {!right && (
        <img
          onClick={() => setModal(true)}
          className={style['projekt-pictures']}
          src={image ? src : src2}
        />
      )}
      {modal && (
        <div onClick={() => setModal(false)}>
          <PictureModal image={image ? src : src2} />
        </div>
      )}
    </div>
  );
};
export default PictureTextContainerSlider;
