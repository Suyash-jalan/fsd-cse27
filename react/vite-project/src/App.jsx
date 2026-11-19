import React from 'react';
import Student1 from './component/student';
import Navbar from './component/Navbar';

function App() {
  return (
     <div>
      <Navbar/>
      <br/>
    <div
      style={{
        display: 'flex',
        gap:'20px',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      
      <Student1 />
      <br />

      <Student1 />
      <br />

      <Student1 />
      <br />

    </div>
    </div>
  );
}

export default App;