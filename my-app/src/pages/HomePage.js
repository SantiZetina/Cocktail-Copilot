import React, { useState } from 'react';
import Container from '../components/Container';
import CocktailSearch from '../components/CocktailSearch';
import CocktailDisplay from '../components/CocktailDisplay';
import IngredientsList from '../components/IngredientsList';
import Instructions from '../components/Instructions';

const HomePage = () => {
    const [showInstructions, setShowInstructions] = useState(true);


    const handleSearch = (searchTerm) => {
        console.log("Search Term: ", searchTerm);
    }

    const handleSearchFocus = () => {   
        setShowInstructions(false);
    }

    return (
        <div className="container">
          <h1 className="text-center mt-5">Cocktail Maker</h1>
          {showInstructions && (
            <p className="text-center">
              Hi, welcome to SipStream. You may type the name of the cocktail for the recipe or type ingredients you have at home to generate a cocktail.
            </p>
          )}
          <CocktailSearch onSearch={handleSearch} onFocus={handleSearchFocus} />
          {/* Other Components */}
        </div>
      );
      
}

export default HomePage;