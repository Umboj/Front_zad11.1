import React, { useState } from 'react';

const App = () => {
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUserData(data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={fetchUserData}>Losuj dane</button>
      {userData && (
        <div>
          <img src={userData.picture.large} alt="User" />
          <p>
            {userData.name.first} {userData.name.last}
          </p>
          <p>{userData.email}</p>
          <p>{userData.location.city}</p>
        </div>
      )}
    </div>
  );
};

export default App;