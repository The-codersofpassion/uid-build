import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';


function App() {
  return (
    <div className="app">
       <Router>
         <Switch>
           <Route exact path="/">
             <HomeScreen />
           </Route>
           <Route exact path="/login">
             <LoginScreen />
           </Route>
         </Switch>
       </Router>

       
    </div>
  );
}

export default App;
