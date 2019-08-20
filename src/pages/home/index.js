import React, { Component } from 'react';
import './home.css';

import Header from '../../components/header';
import ImageHeader from '../../assets/burguer-header.jpg';

export default class Home extends Component {

  componentDidMount() {
    console.log("Component vai montar ");

    this.burguer = document.getElementById("Uai");

    this.burguer.addEventListener('click', () => {
      this.burguer.classList.add('current');
      console.log("Functionu em")
    });

  }

  render() {
    return (
      <div id="Container" >
        <Header />
        <img src={ImageHeader} className="Burguer" id="Uai" />
      </div>
    );
  }
}
