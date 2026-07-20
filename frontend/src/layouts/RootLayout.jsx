import React, {useState} from 'react'
import { Outlet } from 'react-router';
import "../App.css";
import Logo from "../assets/vite.svg" ;
import Search from '../components/Search';

function RootLayout() {


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <Search />
            </ul>
          </div>
        </div>
      </nav>
     
      <Outlet />
    </>
  );
}

export default RootLayout;