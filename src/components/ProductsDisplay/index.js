import React from 'react';
import './index_style.css';

import Categories from './categories';
import BurguerList from './burguer_list';

export default function (props) {
  return (
    <div className="Products-Container">
      <Categories />
      <BurguerList />
    </div>
  );
};