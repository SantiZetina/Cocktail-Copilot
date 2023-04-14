import React from 'react';

const IngredientsList = ({ ingredients }) => {
  return (
    <div>
      {ingredients && ingredients.map((ingredient, index) => (
        <div key={index}>{ingredient}</div>
      ))}
    </div>
  );
};


export default IngredientsList;
