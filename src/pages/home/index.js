import React, { Component } from 'react';
import './home.css';

import AnimatedLogo from '../../components/AnimatedLogo';

import Header from '../../components/header';
import ImageHeader from '../../assets/burguer-header.jpg';
import ImageHeader2 from '../../assets/burguer-header2.jpg';
import ImageHeader3 from '../../assets/burguer-header3.jpg';
import ImageHeader4 from '../../assets/burguer-header4.jpg';

export default class Home extends Component {
  /**
    componentDidMount() {
      console.log("Component vai montar ");
  
      this.burguer = document.getElementById("Uai");
  
      this.burguer.addEventListener('click', () => {
        this.burguer.classList.add('current');
        console.log("Functionu em")
      });
  
    }
*/


  componentDidMount() {
    const img1 = document.getElementById("img-burguer");
    const img2 = document.getElementById("img-burguer2");
    const img3 = document.getElementById("img-burguer3");
    const img4 = document.getElementById("img-burguer4");

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
            img1.classList.add('active');
            this.componentDidMount();
            setTimeout(() => {
              img4.classList.remove('desactive');
              img4.classList.remove('active');
            }, 5000);
          }, 5000);
        }, 5000);
      }, 5000);
    }, 8000);

  }
  render() {
    return (
      <div className="Container" >
        {/*
      */}

        <div className="Logo-Container" >
          <AnimatedLogo />
        </div>

        <Header />

        <div className="Slide-Container">
          <img alt="Nao foi possivel carregar" id="img-burguer" src={ImageHeader} className="Burguer active" />
          <img alt="Nao foi possivel carregar" id="img-burguer2" src={ImageHeader2} className="Burguer" />
          <img alt="Nao foi possivel carregar" id="img-burguer3" src={ImageHeader3} className="Burguer" />
          <img alt="Nao foi possivel carregar" id="img-burguer4" src={ImageHeader4} className="Burguer" />
        </div>
      </div>
    );
  }
}
