import React, { useState } from 'react';
import { sendMessage } from '../api';
import '../styles/CocktailSearch.css';

const CocktailSearch = ({ onSearch, onFocus }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await sendMessage(`As a bartender, ${searchTerm}`);
      setChatHistory([...chatHistory, { role: 'user', content: searchTerm }, response]);
      onSearch(searchTerm); // Call the onSearch prop here
      setSearchTerm('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  

  return (
    <div className='row justify-content-center search-bar-container'>
      <div className='col-md-6'>
        <form onSubmit={handleSubmit} className="mt-5">
          <div className='input-group'>
            <input 
            type='text'
            className='form-control'
            placeholder='Search or generate a cocktail'
            value={searchTerm}
            onChange={handleInputChange}
            onFocus={onFocus}
            />
            <button type='submit' className='btn btn-secondary'>Search</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CocktailSearch;
