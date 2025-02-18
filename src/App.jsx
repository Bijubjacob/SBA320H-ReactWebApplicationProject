import React from 'react';
import { useState } from 'react'
import Footer from './components/Footer';
import Header from './components/header';
import './App.css';
import './components/Footer.css';
import './components/Header.css';
import { Switch } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
    <>
      <div>
        <Router>
          < Header />

          <Switch>
            <Route exact path='/'>
              <h1> This is the Home Page</h1>

            </Route>

            <Route path='/about'>
              <h1>About Us</h1>

            </Route>
          </Switch>

          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App
