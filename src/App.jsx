import React from 'react';
import { useState } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import './components/Footer.css';
import './components/Header.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Views/Home';
import About from './components/Views/About';
import Pexels from './components/Views/Pexels';


function App() {

  return (
    <>
      <div>
        <Router>
          < Header />

          <Switch>
            <Route path="/">
              <Home />
            </Route>

            <Route path="/about">
              <About />

            </Route>
            <Route path="/Pexels/:id">
              <Pexels Photos />

            </Route>
          </Switch>

          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App
