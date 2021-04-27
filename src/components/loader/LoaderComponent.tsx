import React, { FC } from 'react';
import style from './styles.module.css';

const LoaderComponent: FC = () => {
  return (
    <div className={`${style.loadComponent} `}>
      <div className={style['lds-facebook']}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoaderComponent;
