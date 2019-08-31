import React from 'react';
import './styles.css';

import PromoImage1 from '../../assets/promo-burguer1.jpg';
import PromoImage2 from '../../assets/promo-burguer2.jpg';
import PromoImage3 from '../../assets/promo-burguer3.jpg';

const Promo1Ingredients = [
  "Baby Beef",
  "Queijo Manchego",
  "Cebola Caramelizada",
  "Molho Béarnaise",
  "Folhas de Rúcula"
];
const Promo2Ingredients = [
  "Blend de Fraldinha",
  "Pernil ou Costela",
  "Maionese Picante de jalapeño.",
  "Repolho Roxo",
  "Queijo Cheedar"
];
const Promo3Ingredients = [
  "Beef Coxão Mole",
  "Mel de Bacon",
  "Três Queijos",
  "Molho Chipotle",
  "Cebola Roxa"
];

export default function (props) {
  return (
    <div className="Promo-Container">
      <Element src={PromoImage1} ingredients={Promo1Ingredients} title="Trufado" />
      <Element src={PromoImage2} ingredients={Promo2Ingredients} title="Porco com Maionese de Jalapeño" />
      <Element src={PromoImage3} ingredients={Promo3Ingredients} title="Mel de Bacon e Três Queijos" />
    </div>
  );
}

function Element({ src, title, ingredients, description }) {
  return (
    <div className="Image-Container">
      <img className="Promo-Image" src={src} alt="Promo-Burguer" />
      <span className="Promo-Title">{title}</span>
      <div className="Promo-Ingredients">
        {ingredients && ingredients.map((ingredient, index) => (
          <React.Fragment key={index}>
            <span className="Promo-Ingredient" >* {ingredient}</span>
            <br />
          </React.Fragment>
        ))}
      </div>
      {/**
      <span className="Promo-Description">{description}</span>*/}
    </div>
  );
}