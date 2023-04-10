import React from 'react';
import IngredientsList from './IngredientsList';
import Instructions from './Instructions';

const CocktailDisplay = ({ instructions, ingredients }) => {
    return (
        <div>
            <Instructions instructions={instructions} />
            <IngredientsList ingredients={ingredients} />
            
        </div>

        )
}
export default CocktailDisplay;
