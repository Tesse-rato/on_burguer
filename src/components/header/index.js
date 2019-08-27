import React from 'react';
import './header.css';


import Logo from '../../assets/onBurguer.png';
import UserSettings from '../../assets/man-user.svg';
import UserLogin from '../../assets/enter.svg';
import UserLogout from '../../assets/exit.svg';
import FacebookIco from '../../assets/facebook.svg';
import IntagramIco from '../../assets/instagram.svg';

export default props => (
  <div className="Container">
    <div className="Logo-Container">

      <img alt="on_burguer" src={Logo} className="Logo" />

      <div className="Social-Container">
        <img alt="on_burguer" src={IntagramIco} className="Social-Ico" />
        <div className="Separator"></div>
        <img alt="on_burguer" src={FacebookIco} className="Social-Ico" />
      </div>
    </div>

    <div className="Icons-Container">
      <div className="Ico-Container">
        <img alt="Settings" src={UserSettings} className="Icons" />
        <span>Usuário</span>
      </div>
      <div className="Ico-Container">
        <img alt="Login" src={UserLogin} className="Icons" />
        <span>Entrar</span>
      </div>
      <div className="Ico-Container">
        <img alt="Logout" src={UserLogout} className="Icons" />
        <span>Sair</span>
      </div>
    </div>
  </div>
)