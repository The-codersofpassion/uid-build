import React, { useState } from 'react';
import './LoginScreen.css';
import Nav from '../Nav';
import Footer from '../Footer';

function LoginScreen() {
    const [signIn, setSignIn] = useState(false);


    return (
        <div className="loginScreen">
            <Nav />

            <div className="logincontent">
            <ul>
             <li>
                <label for="fname">Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className="input" type="text" id="fname" name="fname" />
                </li>
                <br />
                <li>
               <label for="fname">Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className="input" type="text" id="fname" name="fname" />
                </li>
                <br />
                <li>
                <label for="fname">Password: </label>
                <input className="input" type="text" id="fname" name="fname" />
                </li>
                <br />
                <li>
                <label for="fname"> OTP:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input className="input" type="text" id="fname" name="fname" />
                </li>
                <br />
                <br />
                <li className="button">
                <button>Login</button>
                </li>
                <br />
            </ul>
            </div>
            
            <Footer />
        </div>

    );
}

export default LoginScreen;
