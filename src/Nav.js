import React from 'react';
import {NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {

    return (
        <div className="nav ">
            <div className="nav__contents">
            <div className="title">My Unique Identification ✔️</div>
            <div className="logo">UID</div>
            </div>
            <div className="links">
                <ul className="myclass">
                    <li><NavLink to='/home'>Home</NavLink></li>
                    <li><NavLink to='/UId'>Get UId</NavLink></li>
                    <li><NavLink to='/About'>About</NavLink></li>
                    <li><NavLink to='/Login'>Login</NavLink></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
