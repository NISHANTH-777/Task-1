import React from 'react';
import './App.css';

function App() {
  return (
   <div className="content">
    <center>
    <h1>WELCOME TO YOUR PAGE </h1>
    <p1>WE ARE GLAD TO INVITE YOU FOR OUR WEBSITE. <br /></p1>
    <p2>PLEASE SIGN UP FOR FUTHER PROCESS. <br /></p2>
    <form className="signup" >
    <input type="text" placeholder='YOUR EMAIL ID' required/><br />
    <input type="text" placeholder='YOUR PASSWORD' required /><br />
    <button>SIGN UP</button>
    </form>
    </center>
   </div>
  );
}

export default App;
