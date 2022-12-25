import * as react from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

const GeneralTopBar=()=>{
    return(
        <nav className="navbar bg-info navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">E-Makeup Artist Application</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">

                        <Link to="/" className="nav-link" aria-current="page" >Home</Link>
                        <Link to="/about" className="nav-link" >About</Link>
                        <Link to="/register" className="nav-link" >Register</Link>
                        <Link to="/login" className="nav-link">Login</Link>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default GeneralTopBar;