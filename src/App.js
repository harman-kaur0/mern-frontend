
import './App.css';
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login"
import SignUp from "./components/SignUp"

const App = () => {
  return (
    <div className="App">
      <h1>App</h1>
      <a href="/login"><button>Sign In</button></a>
      <a href="signup"><button>Sign Up</button></a>
      <Router>
        <Route exact path="/login" render={() => <Login/>}/>
        <Route exact path="/signup" render= {() => <SignUp/>}/>
      </Router>
      
    </div>
  );
}

export default App;
