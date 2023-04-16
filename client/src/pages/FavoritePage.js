import React from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client/core';
import Cookies from 'js-cookie';
import Instructions from '../components/Instructions';

const GET_FAVORITE_INSTRUCTIONS = gql`
  query GetFavoriteInstructions($userId: ID!) {
    getFavoriteInstructions(userId: $userId) {
      id
      name
      steps
      imageUrl
    }
  }
`;

const FavoritePage = () => {
  const { loading, error, data } = useQuery(GET_FAVORITE_INSTRUCTIONS, {
    variables: { userId: Cookies.get('userId') },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!favoriteInstructions) {
    return <p>No favorite instructions found.</p>;
  }

  const favoriteInstructions = data.getFavoriteInstructions;

  return (
    <div className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div className="favorites-container">
        <h1>Favorites</h1>
        {favoriteInstructions && favoriteInstructions.map(instruction => (
          <div key={instruction.id}>
            <h3>{instruction.name}</h3>
            <img src={instruction.imageUrl} alt={instruction.name} />
            <Instructions instructions={instruction.steps} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
