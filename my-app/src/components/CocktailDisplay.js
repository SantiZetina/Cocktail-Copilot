import React from 'react';
import IngredientsList from './IngredientsList';
import Instructions from './Instructions';

const CocktailDisplay = ({ cocktail}) => {
    if(!cocktail){
        return <p>No cocktail selected</p>
    }

    return (
        <div>
            <h2>{cocktail.name}</h2>
            <IngredientsList ingredients={cocktail.ingredients} />
            <Instructions instructions={cocktail.instructions} />
        </div>
    )
}

export default CocktailDisplay;
