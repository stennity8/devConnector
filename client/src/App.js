import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import './App.css';

const  App = () => 
  <Fragment>
    <Navbar/>
    <Landing/>
  </Fragment>

export default App;
