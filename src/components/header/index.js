import React from 'react';
import './header.css';


//import Logo from '../../assets/onBurguer.png';
//import UserSettings from '../../assets/man-user.svg';
import UserLogin from '../../assets/enter.svg';
//import UserLogout from '../../assets/exit.svg';
//import FacebookIco from '../../assets/facebook.svg';
//import IntagramIco from '../../assets/instagram.svg';

import ListIco from '../../assets/list.svg';
import ShoppingBasket from '../../assets/shopping-cart.svg';

export default props => (
  <div className="Header-Container">

    {/** Nao vai ficar aqui 
    <div className="Logo-Container">
      <img className="Logo" alt="on_burguer" src={Logo} />
      <div className="Social-Container">
        <img alt="on_burguer" src={IntagramIco} className="Social-Ico" />
        <div className="Separator"></div>
        <img alt="on_burguer" src={FacebookIco} className="Social-Ico" />
      </div>
    </div>
    */}
    <div style={{ width: '5%', maxWidth: '30px', position: 'relative', left: '10px' }} >
      <img className="Menu-Ico" src={ListIco} alt="Lista" />
    </div>

    <div className="Icons-Container">
      {/* Apenas se logado 
      <div className="Ico-Container">
        <img alt="Settings" src={UserSettings} className="Icons" />
        <span>Usuário</span>
      </div>
      */}
      <div className="Ico-Container">
        <img alt="Login" src={ShoppingBasket} className="Icons" />
        <span>Carrinho</span>
      </div>
      <div className="Ico-Container">
        <img alt="Logout" src={UserLogin} className="Icons" />
        <span>Entrar</span>
      </div>
    </div>
  </div>
)