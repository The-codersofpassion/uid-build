import React from 'react';
import {Link } from 'react-router-dom';
import './Nav.css';
import { useHistory } from 'react-router-dom';

function Nav() {
    const history = useHistory();

    return (
        <div className="nav ">
            <div className="nav__contents">
            <div className="title">My Unique Identification ✔️</div>
            <div className="logo">UID</div>
            </div>
            <div className="links">
                <ul className="myclass">
                    <li><Link exact activeClassName="active" to='/'>Home</Link></li>
                    <li><Link activeClassName="active" to='/'>Get UId</Link></li>
                    <li><Link activeClassName="active" to='/'>About</Link></li>
                    <li><Link activeClassName="active" onClick={() => history.push("/Login")}>Login</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Nav;
