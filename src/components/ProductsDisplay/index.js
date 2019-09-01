import React from 'react';
import './styles.css';

import BurguerIco from '../../assets/burger.svg';
import BaveragesIco from '../../assets/wine.svg';
import FriesPotatoes from '../../assets/fried-potatoes.svg';

function Categories() {
  let currentStateHighlighter = '';
  let initialHighlighterState = 'burguer';

  function handleHighlighter(highlighter) {
    const baverages = document.getElementById('baverages-ico');
    const burguer = document.getElementById('burguer-ico');
    const fries = document.getElementById('fries-ico');

    function updateClass(arg) {
      highlighter.classList.add('expand');
      setTimeout(() => {
        highlighter.classList.remove('expand');
        highlighter.classList.remove(currentStateHighlighter);
        highlighter.classList.add(arg);
        currentStateHighlighter = arg;
      }, 500);
    };

    baverages.addEventListener('click', () => updateClass('baverages'));
    burguer.addEventListener('click', () => updateClass('burguer'));
    fries.addEventListener('click', () => updateClass('fries'));
  }

  window.addEventListener('load', () => {
    const highlighter = document.getElementById("highlighter");
    highlighter.classList.add(initialHighlighterState);
    currentStateHighlighter = initialHighlighterState;
    handleHighlighter(highlighter);
  });

  return (
    <div className="Categories-Container">
      <div className="Categories-Ico-Container">
        <img id="burguer-ico" className="Categories-Ico" src={BurguerIco} alt="Icone" />
        <img id="baverages-ico" className="Categories-Ico" src={BaveragesIco} alt="Icone" />
        <img id="fries-ico" className="Categories-Ico" src={FriesPotatoes} alt="Icone" />
      </div>
      <div className="Highlighter" id="highlighter" />
    </div>
  );
}

export default function (props) {
  return (
    <div className="Products-Container">
      <Categories />
      <div></div>
    </div>
  );
};