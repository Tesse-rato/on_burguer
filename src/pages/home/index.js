import React, { Component } from 'react';
import './home.css';

import AnimatedLogo from '../../components/AnimatedLogo';
import Header from '../../components/header';
import SliderHeader from '../../components/SliderHeader';
import SocialMedia from '../../components/SocialMedia';

export default class Home extends Component {

  render() {
    return (
      <div className="Container" >

        <Header />

        <SliderHeader >
          <div className="Logo-Container" >
            <AnimatedLogo />
          </div>
          <div className="Description-Container" >
            <span className="Title" >Tupaciguara - MG</span>
            <span className="Sub-Title" >Rua Bueno Brandão, 143.</span>
            <span className="Sub-Title" >Em frente à praça do Estadual</span>
            <span className="Sub-Title" >Aberto das 19:00h ás 00:00h</span>
            <span className="Title below">Contatos</span>
            <span className="Sub-Title" style={{ fontSize: '2.5vw', fontFamily: 'Sans' }}>WhatsApp (34) 99181-5364</span>
            <SocialMedia />
          </div>
        </SliderHeader>
      </div>
    );
  }
}
