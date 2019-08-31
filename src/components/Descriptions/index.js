import React from 'react';
import './styles.css';

export default function () {
  return (
    <React.Fragment>
      <span className="Title" >Tupaciguara - MG</span>
      <span className="Sub-Title" >Rua Bueno Brandão, 143.</span>
      <span className="Sub-Title" >Em frente à praça do Estadual</span>
      <span className="Sub-Title" >Aberto das 19:00h ás 00:00h</span>
      <span className="Title below">Contatos</span>
      <span className="Sub-Title" style={{ fontSize: '2.5vw', fontFamily: 'Sans' }}>WhatsApp (34) 99181-5364</span>
    </React.Fragment>
  );
};