import React, { Component } from 'react';
import './home.css';

import AnimatedLogo from '../../components/AnimatedLogo';
import Header from '../../components/header';
import SliderHeader from '../../components/SliderHeader';
import SocialMedia from '../../components/SocialMedia';
import Description from '../../components/Descriptions';
import PromoList from '../../components/PromoList';

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
            <Description />
            <SocialMedia />
          </div>
        </SliderHeader>
        <PromoList />
      </div>
    );
  }
}
