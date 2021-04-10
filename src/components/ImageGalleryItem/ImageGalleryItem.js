import React from 'react';
import style from './ContactListItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImage, onClickImage }) => (
  <li
    className={style.imageGalleryItem}
    onClick={() => onClickImage(largeImage)}
  >
    <img src={webformatURL} alt="" className={style.imageGalleryItemImage} />
  </li>
);

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
