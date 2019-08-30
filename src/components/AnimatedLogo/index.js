import React from 'react';

import OnBurguer from './on_burguer.svg.js';
import Burguer from './burguer.svg.js';

export default function ({ style }) {
  return (
    <div style={{ transform: 'translateX(27%)', width: '100%', maxWidth: '700px', ...style }} >
      <Burguer />
      <OnBurguer />
    </div>
  );
}