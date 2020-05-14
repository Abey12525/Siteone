import React from 'react';
import logo from './logo.svg';
import { Router } from '@reach/router'

import About from './Pages/About.jsx';
import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import Portfolio from './Pages/Portfolio.jsx';
import Blog from './Pages/Blog.jsx';
import ResponsiveNavigation from './components/ResponsiveNavigation.jsx';
import './App.css';

function App() {
    const navlinks = [
      {
        text: 'H o m e',
        path: '/',
        icon: 'ion-ios-home'
      },
      {
        text: 'C o n t a c t',
        path: '/contact',
        icon: 'ion-ios-megaphone'
      },
      {
        text: 'A b o u t',
        path: '/about',
        icon: 'ion-ios-business'
      },
      {
        text: 'B l o g',
        path: '/blog',
        icon: 'ion-ios-bonfire'
      },
      {
        text: 'P o r t f o l i o',
        path: '/portfolio',
        icon: 'ion-ios-briefcase'
      }
  ]


  return (
    <div className="App">
        
        <ResponsiveNavigation 
          navLinks={ navlinks }
          logo = { logo }
          // background = "#fff"
          hoverBackground = "#4D5165"
          linkColor = "#777" />

        
        <Router>

          <Contact path="/contact" />
          <Home path="/home" />
          <Portfolio path="/portfolio" />
          <Blog path="/blog" />
          <About path="/about" />

        </Router>
        
    </div>
  );
}

export default App;


{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}