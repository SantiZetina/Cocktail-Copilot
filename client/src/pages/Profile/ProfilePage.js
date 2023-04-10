import React from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <img className="profile-picture" src="profile_picture_placeholder.jpg" alt="Profile" />
        <h2 className="profile-name">Your Name</h2>
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
      </div>
    </div>
  );
};

export default ProfilePage;
