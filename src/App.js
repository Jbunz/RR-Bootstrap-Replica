import React from 'react';
import './App.css'; // Import your CSS file
import MyNavbar from './Components/TopBar'; // Import the MyNavbar component

function App() {
  return (
    <div className="App">
      <MyNavbar /> {/* Render your Navbar component */}
      <div className="content">
        <h1>Hello World</h1>
        {/* Other content */}
      </div>
    </div>
  );
}

export default App;
