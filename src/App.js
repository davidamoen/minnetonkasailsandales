import React, { Component } from 'react';
import './App.css';
import './css/bootstrap.min.css';
import './css/animate.css';
// import './css/owl.carousel.min.css';
import './css/responsive.css';
import './css/slick.css';
import './css/slicknav.css';
import './css/slick-theme.css';

import largeLogo from './images/sales_and_ales_large.png';
import mobileLogo from './images/sales_and_ales_mobile.png';

console.log('in app.js');

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <header id="header-wrap">
        <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar indigo">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar" aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
              <span className="icon-menu"></span>
              <span className="icon-menu"></span>
              <span className="icon-menu"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="navbar-nav mr-auto w-100 justify-content-left clearfix">
              <li className="nav-item active">
                <a className="nav-link" href="#hero-area">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#brewers">
                  Brewers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <ul className="mobile-menu navbar-nav">
          <li>
            <a className="page-scroll" href="#hero-area">
              Home
            </a>
          </li>
          <li>
            <a className="page-scroll" href="#brewers">
              Brewers
            </a>
          </li>
          <li>
            <a className="page-scroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

        <div id="hero-area" className="hero-area-bg">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="contents text-center">

              <div className="desktop-hero">
                  <img src={largeLogo} alt="logo" align="left" />
              </div>

              <div className="mobile-hero">
                  <img src={mobileLogo} alt="logo" align="left" />
              </div>
            </div>
        

            </div>
          </div>
        </div>
      </div>
      </header>
      </div>
    );
  }
}

export default App;
