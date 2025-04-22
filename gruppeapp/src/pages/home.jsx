// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import profilecard from '../components/profilecard';

const home = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    // Fetch data from your backend or Sanity
    // Here, we will use hardcoded data as an example.
    setProfiles([
      { name: 'John Doe', email: 'john.doe@example.com', image: 'https://via.placeholder.com/150' },
      { name: 'Jane Smith', email: 'jane.smith@example.com', image: 'https://via.placeholder.com/150' }
    ]);
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to the Home Page</h1>
      <div className="profiles">
        {profiles.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            email={profile.email}
            image={profile.image}
          />
        ))}
      </div>
    </div>
  );
};

export default home;
