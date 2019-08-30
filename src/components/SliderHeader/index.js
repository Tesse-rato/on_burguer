import React from 'react';
import './styles.css';

import ImageHeader from '../../assets/burguer-header.jpg';
import ImageHeader2 from '../../assets/burguer-header2.jpg';
import ImageHeader3 from '../../assets/burguer-header3.jpg';
import ImageHeader4 from '../../assets/burguer-header4.jpg';

export default function (props) {
  function startAnimation() {
    const img1 = document.getElementById("img-burguer");
    const img2 = document.getElementById("img-burguer2");
    const img3 = document.getElementById("img-burguer3");
    const img4 = document.getElementById("img-burguer4");

    img1.classList.add('active');
    setTimeout(() => {
      img1.classList.add('desactive');
      img2.classList.add('active');
      setTimeout(() => {
        img1.classList.remove('desactive');
        img1.classList.remove('active');
        img2.classList.add('desactive');
        img3.classList.add('active');
        setTimeout(() => {
          img2.classList.remove('desactive');
          img2.classList.remove('active');
          img3.classList.add('desactive');
          img4.classList.add('active');
          setTimeout(() => {
            img3.classList.remove('desactive');
            img3.classList.remove('active');
            img4.classList.add('desactive');
            startAnimation();
            setTimeout(() => {
              img4.classList.remove('desactive');
              img4.classList.remove('active');
            }, 8000);
          }, 8000);
        }, 8000);
      }, 8000);
    }, 8000);
  };

  window.addEventListener('load', () => {
    startAnimation();
  });
  return (
    <div className="Slide-Container">
      {props.children}
      <img alt="Nao foi possivel carregar" id="img-burguer" src={ImageHeader} className="Burguer" />
      <img alt="Nao foi possivel carregar" id="img-burguer2" src={ImageHeader2} className="Burguer" />
      <img alt="Nao foi possivel carregar" id="img-burguer3" src={ImageHeader3} className="Burguer" />
      <img alt="Nao foi possivel carregar" id="img-burguer4" src={ImageHeader4} className="Burguer" />
    </div>
  );
};