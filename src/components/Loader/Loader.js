import React from 'react';
import LoaderSpinner from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader = () => (
  <div className={style.loader}>
    <LoaderSpinner type="Grid" color="#00BFFF" height={80} width={80} />
  </div>
);

export default Loader;
