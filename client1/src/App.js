import './App.css';
import Header from './components/Header'
import Register from './components/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'
import SearchUser from './components/SearchUser'
import {React,useState} from 'react';
import DeleteUser from './components/DeleteUser';

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route 
        exact 
        path="/Search-User"
        render={(props)=>(<SearchUser
        {...props}
        />)} />
        <Route exact path="/Delete-User" component={DeleteUser} />
      </Router>
      
    </>
  );  
};

export default App;
