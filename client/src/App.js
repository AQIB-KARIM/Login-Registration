import React from 'react'
import './App.css';
import Grid from './components/grid';
import Discription from "./components/discription";
import Contact from "./components/contact";
import Register from "./components/Register";
import Login from "./components/Login";
import UserAuth from './components/auth/AuthState';
import AuthToken from './components/auth/tokenAuth';
import {
  BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";


  if(localStorage.token){
    AuthToken(localStorage.token);
}

function App() {
  return (
    <UserAuth>
    <Router>
    <div className="App">
     
      
    
    <Switch>
      <Route path = "/discription">
       <Discription/>
      </Route>
      <Route path = "/contact">
      <Contact/>
      </Route>
      <Route path = "/register">
      <Register/>
      </Route>
      <Route path = "/login">
      <Login/>
      </Route>
       <Route path = "/">
       <Grid/>
      </Route>
      
    </Switch>

    </div>
    </Router>
   </UserAuth>
  );
}

export default App;
