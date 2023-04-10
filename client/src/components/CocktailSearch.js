// import React, { useState } from 'react';
// import '../styles/CocktailSearch.css';

// const CocktailSearch = ({ onSearch, onFocus }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleInputChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSearch(searchTerm);
//   };

//   return (
//     <div className='row justify-content-center search-bar-container'>
//       <div className='col-md-6'>
//         <form onSubmit={handleSubmit} className="mt-5">
//           <div className='input-group'>
//             <input 
//             type='text'
//             className='form-control'
//             placeholder='Search or generate a cocktail'
//             value={searchTerm}
//             onChange={handleInputChange}
//             onFocus={onFocus}
//             />
//             <button type='submit' className='btn btn-secondary'>Search</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CocktailSearch;

// above is original code

// below is test code
import React, { useState } from 'react';
import '../styles/CocktailSearch.css';

const CocktailSearch = ({ onFocus }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchCocktail = async (searchTerm) => {
    try {
      const response = await fetch('/cocktails/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: searchTerm }),
      });

      const data = await response.json();
      console.log('Cocktail recipe:', data);
    } catch (error) {
      console.error('Error searching for cocktail:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchCocktail(searchTerm);
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
