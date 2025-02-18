import React from 'react';
import { useState } from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import './components/Footer.css';
import './components/Header.css';
import './components/Views/Pexels.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"; // Note: `Switch` and `Route` are from `react-router-dom`
import Home from './components/Views/Home';
import About from './components/Views/About';
import Pexels from './components/Views/Pexels';

function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/pexels/:id">
              <Pexels /> {/* This will match the dynamic ID route */}
            </Route>

          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
