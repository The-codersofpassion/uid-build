import React from 'react';
import { Link } from 'react-router-dom';
import "./Row.css";

function Row() {

    return (
        <div className="rows">
            <ul className="Ids">
                <li>
                    <h2>Get Your Unique Identification Number</h2>
                    <h3>UID is for every individual irrespective of age.</h3>
                    <p>From a new born to an adult everyone can enroll for UID</p>
                    <ul>
                        <li><Link to='/Status'>Check UID status</Link></li>
                        <li><Link to='/'>Download UID</Link></li>
                        <li><Link to='/'>Book your UID</Link></li>
                    </ul>
                </li>
                <li>
                    <h2>Update UID</h2>
                    <h3>Keep Your UID details up-to-date</h3>
                    <p>It is essential to keep your UID details correct and updated always</p>
                    <ul>
                        <li><Link to='/'>check UID update status</Link></li>
                        <li><Link to='/'>UID update history</Link></li>
                    </ul>
                </li>
                <li>
                    <h2>UID services</h2>
                    <h3>An array of services for UID holders</h3>
                    <p>UID registered mobile number is essential to access the following services</p>
                    <ul>
                        <li><Link to='/'>Verify UID number</Link></li>
                        <li><Link to='/'>Verify Email/Mobile number</Link></li>
                        <li><Link to='/'>Lock/Unlock Details</Link></li>
                    </ul>
                </li>
                <li>
                    <h1>What is UID?</h1>
                    <p>UID is a 10 digit Unique Identification number that acts as ID and lets you store all the details at one place.</p>
                    <ul>
                        <li><Link to='/'>GET UID</Link></li>
                        <li><Link to='/'>About UID</Link></li>
                    </ul>
                </li>
            </ul>
            <div className="questions">
                <ul className="questions">
                    <h2>Frequently Asked Questions</h2>
                    <li >
                        <div className="accordian accordian-item">
                            Are my documents safe here?<span>🔽</span>
                        </div>
                        <div className="answer">
                            <h2>Yes your details and documents are safe here until and unless you keep your details and mobile number updated because UID has a three step verification system that protects your account from getting hacked. </h2>
                        </div>
                    </li>
                    <li >
                        <div className="accordian accordian-item" >
                            What if I lost my registered mobile number ?<span>🔽</span>
                        </div>
                        <div className="answer">
                            <h2>If you lost your registered mobile number then you can access the otp from your email also and after logging in immediately update your new mobile number.</h2>
                        </div>
                    </li>
                    <li >
                        <div className="accordian accordian-item">
                            Can I access my account from anywhere and at anytime?<span>🔽</span>
                        </div>
                        <div className="answer">
                            <h2>You can access your account at anytime and from anywhere by allowing the access to new device from verification email that you will receive on your registered mailID after you try to login. </h2>
                        </div>

                    </li>
                    <li >
                        <div className="accordian accordian-item" >
                            What if i forgot the password ?<span>🔽</span>
                        </div>
                        <div className="answer">
                            <h2>If you forget your password then UID provide you with forgot password option where you can change your password by accessing to the link you get on your mailID</h2>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Row;
