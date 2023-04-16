import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '../../graphql/queries';
import './ProfilePage.css';
import Cookies from 'js-cookie';

const ProfilePage = ({ userId, onLogout }) => {
  console.log("ProfilePage userId:", userId);
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: { id: userId },
  });

  const handleLogout = () => {
    Cookies.remove('userId'); 
    onLogout(); 
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.getUserById;

  return (
    <div className="profile-page">
      <div className="profile-header">
        <img className="profile-picture" src="profile_picture_placeholder.jpg" alt="Profile" />
        <h2 className="profile-name">{user.username}</h2>
      </div>
      <div className="profile-bio">
        <p>Your bio goes here.</p>
      </div>
      <div className="profile-favorites">
        <h3>Favorite Drinks</h3>
        {/* List favorite drinks here */}
      </div>
      <div className="profile-friends">
        <h3>Friends</h3>
        {/* List friends here */}
        <button onClick={handleLogout} className="logout-button">
  Logout
</button>
      </div>
    </div>
  );
};

export default ProfilePage;
