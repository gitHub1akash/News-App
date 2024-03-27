import React, { Component } from "react";
import {Link } from "react-router-dom";

export class NavBar extends Component {

linkStyles = ({isActive})=>{
    return{
      color : isActive ? 'white' : 'grey'
    }
  }

  render() {
    return (
      <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
          <img className = " mx-3 "src="https://www.pngall.com/wp-content/uploads/2016/06/Monkey-PNG-Clipart.png"  style={{height : '30px'}}alt="LOGO" />
            <Link className="navbar-brand" to="/">
              News Monkey  
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent : "center"}}>
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <Link className="nav-link act" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link act"to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link act"to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link act"to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link act"to="/general">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link act" to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link act" to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link act" to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link act" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
