import React from 'react';

import OnBurguer from './on_burguer.svg.js';
import Burguer from './burguer.svg.js';

export default function ({ style }) {
  return (
    <div style={{ width: '75%', maxWidth: '670px', left: '25%', position: 'relative', ...style }} >
      <Burguer />
      <OnBurguer />
    </div>
  );
}