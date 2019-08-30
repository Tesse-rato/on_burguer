import React from 'react';
import './styles.css';

import FacebookIco from '../../assets/facebook.svg';
import IntagramIco from '../../assets/instagram.svg';

export default function () {
  return (
    <div className="Social-Container">
      <img alt="on_burguer" src={IntagramIco} className="Social-Ico" />
      <div className="Separator"></div>
      <img alt="on_burguer" src={FacebookIco} className="Social-Ico" />
    </div>
  );
};