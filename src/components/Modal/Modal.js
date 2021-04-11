import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {

    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {

      this.props.onClose();
    }
  };
  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {

      this.props.onClose();
    }
  };

  render() {
    const { largeImage } = this.props;
    return createPortal(
      <div className={style.overlay} onClick={this.handleBackdropClick}>
        <div className={style.modal}>
          {this.props.children}
          <img src={largeImage} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
