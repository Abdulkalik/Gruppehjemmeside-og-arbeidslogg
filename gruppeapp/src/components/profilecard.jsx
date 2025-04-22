import React from 'react';

const ProfileCard = ({ name, email, image }) => {
  return (
    <div className="profile-card">
      <img src={image || 'https://via.placeholder.com/150'} alt={name} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default ProfileCard;
