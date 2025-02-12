import React from 'react';
import './App.css';

function App() {
  return (
   <div className="content">
    <center>
    <h1 className='heading'>WELCOME TO YOUR PAGE </h1>
    <p1 className='para'>WE ARE GLAD TO INVITE YOU FOR OUR WEBSITE. <br /><br /></p1>
    <p2 className='parag'>PLEASE SIGN UP FOR FUTHER PROCESS. <br /><br /></p2>
    <form className="signup" >
    <input type="text" placeholder='YOUR EMAIL ID' required/><br /><br />
    <input type="text" placeholder='YOUR PASSWORD' required /><br /><br />
    <button>SIGN UP</button>
    </form>
    </center>
   </div>
  );
}

export default App;
