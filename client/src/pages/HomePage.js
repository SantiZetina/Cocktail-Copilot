import React, { useState } from 'react';
import Container from '../components/Container';
import CocktailSearch from '../components/CocktailSearch';
import CocktailDisplay from '../components/CocktailDisplay';
import axios from 'axios';
import { sendMessage } from '../api';

const HomePage = () => {
  const [showInstructions, setShowInstructions] = useState(true);
  const [messages, setMessages] = useState([]);

  const handleSearch = async (searchTerm) => {
    console.log("searchTerm: ", searchTerm)
    try {
      const response = await sendMessage(`Make a cocktail: ${searchTerm}`);
      console.log(response.message)

      const aiReply = response.message;
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: 'user', content: searchTerm },
        { role: 'ai', content: aiReply },
      ]);
    } catch (error) {
      console.error('Error searching for cocktail:', error);
    }
  };

  const handleSearchFocus = () => {
    setShowInstructions(false);
  };

  return (
    <Container>
      <h1 className="text-center mt-5">Cocktail AI</h1>
      {showInstructions && (
        <p className="text-center">
          Hi, welcome to SipStream. You may type the name of the cocktail for the recipe or type ingredients you have at home to generate a cocktail.
        </p>
      )}
      <CocktailSearch onSearch={handleSearch} onFocus={handleSearchFocus} />
      <CocktailDisplay messages={messages} />
      {/* Other Components */}
    </Container>
  );
};

export default HomePage;
