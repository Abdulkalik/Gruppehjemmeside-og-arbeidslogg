// src/pages/Profile.jsx
import React from 'react';
import profilecard from '../components/profilecard';

const Profile = () => {
  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <ProfileCard
        name="John Doe"
        email="john.doe@example.com"
        image="https://via.placeholder.com/150"
      />
    </div>
  );
};

export default Profile;
