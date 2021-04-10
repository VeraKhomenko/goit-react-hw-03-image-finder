import React from 'react';
import style from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ hits, onClickImage }) => (

	<ul className={style.imageGallery}>
		{hits.map(({ webformatURL, largeImageURL, id }) => (
			<ImageGalleryItem
				key={id}
				webformatURL={webformatURL}
				onClickImage={onClickImage}
				largeImage={largeImageURL}
			/>
		))}
	</ul>

);

ImageGallery.propTypes = {
	hits: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string })).isRequired,
	onClickImage: PropTypes.func.isRequired,
};

export default ImageGallery;
