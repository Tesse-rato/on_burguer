import React from 'react';
import './burguer_list.css';

import Burguer01 from '../../assets/burguer_list01.jpg';
import Burguer02 from '../../assets/burguer_list02.jpg';
import Burguer03 from '../../assets/burguer_list03.jpg';
import Burguer04 from '../../assets/burguer_list04.jpg';
import Burguer05 from '../../assets/burguer_list05.jpg';
import Burguer06 from '../../assets/burguer_list06.jpg';
import Burguer07 from '../../assets/burguer_list07.jpg';
import Burguer08 from '../../assets/burguer_list08.jpg';
import Burguer09 from '../../assets/burguer_list09.jpg';
import Burguer10 from '../../assets/burguer_list10.jpg';
import Burguer11 from '../../assets/burguer_list11.jpg';
import Burguer12 from '../../assets/burguer_list12.jpg';
import Burguer13 from '../../assets/burguer_list13.jpg';

export default function (props) {
  console.log(window.navigator.userAgent);
  return (
    <div className="List-Container">
      <img className="List-Image" src={Burguer01} />
      <img className="List-Image" src={Burguer02} />
      <img className="List-Image" src={Burguer03} />
      <img className="List-Image" src={Burguer04} />
      <img className="List-Image" src={Burguer05} />
      <img className="List-Image" src={Burguer06} />
    </div>
  );
};