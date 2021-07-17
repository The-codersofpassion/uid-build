import React from 'react';
import { NavLink } from 'react-router-dom';

function Row() {

    return (
        <div className="rows">
            <ul className="rows">
                <ul className="rows">
                    <li>
                        <h2>Get Your Unique Identification Number</h2>
                        <h3>UID is for every individual irrespective of age.</h3>
                        <p>From a new born to an adult every one can enroll for UID</p>
                        <ul>
                            <li><NavLink to='/Status'>Check UID status</NavLink></li>
                            <li><NavLink to='/'>Download UID</NavLink></li>
                            <li><NavLink to='/'>Book your UID</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <h2>Update UID</h2>
                        <h3>Keep Your UID details up-to-date</h3>
                        <p>It is essential to keep your UID details correct and updated always</p>
                        <ul>
                            <li><NavLink to='/'>check UID update status</NavLink></li>
                            <li><NavLink to='/'>UID update history</NavLink></li>
                        </ul>
                    </li>NavLink                    <li>
                        <h2>UID services</h2>
                        <h3>An array of services for UID holders</h3>
                        <p>UID registered mobile number is essential to access the following services</p>
                        <ul>
                            <li><NavLink to='/'>Verify UID number</NavLink></li>
                            <li><NavLink to='/'>Verify Email/Mobile number</NavLink></li>
                            <li><NavLink to='/'>Lock/Unlock Details</NavLink></li>
                        </ul>
                    </li>
                    <li>
                        <h1>What is UID?</h1>
                        <p>UID is a 10 digit Unique Identification number that acts as ID and lets you store all the details at one place.</p>
                        <ul>
                            <li><NavLink to='/'>GET UID</NavLink></li>
                            <li><NavLink to='/'>About UID</NavLink></li>
                        </ul>
                    </li>
                </ul>
                <ul className="rows">
                    <li>
                        <h2>Frequently Asked Questions</h2>
                        <div className="container">
                            <div className="accordian">
                                <div className="accordian accordian-item" id="question1">
                                    <a href="#question1">
                                        Are my documents safe here?<span>🔽</span>
                                        <i className="icon ion-md-add"></i>
                                        <i className="icon ion-md-remove"></i>
                                    </a>
                                    <div className="answer">
                                        <h2>Yes your details and documents are safe here until and unless you keep your details and mobile number updated because UID has a three step verification system that protects your account from getting hacked. </h2>
                                    </div>
                                </div>
                                <div className="accordian accordian-item" id="question1">
                                    <a href="#question2">
                                        What if I lost my registered mobile number ?<span>🔽</span>
                                        <i className="icon ion-md-add"></i>
                                        <i className="icon ion-md-remove"></i>
                                    </a>
                                    <div className="answer">
                                        <h2>If you lost your registered mobile number then you can access the otp from your email also and after logging in immediately update your new mobile number.</h2>
                                    </div>
                                </div>
                                <div className="accordian accordian-item" id="question1">
                                    <a href="#question3">
                                        Can I access my account from anywhere and at anytime?<span>🔽</span>
                                        <i className="icon ion-md-add"></i>
                                        <i className="icon ion-md-remove"></i>
                                    </a>
                                    <div className="answer">
                                        <h2>You can access your account at anytime and from anywhere by allowing the access to new device from verification email that you will receive on your registered mailID after you try to login. </h2>
                                    </div>
                                </div>
                                <div className="accordian accordian-item" id="question1">
                                    <a href="#question4">
                                        What if i forgot the password ?<span>🔽</span>
                                        <i className="icon ion-md-add"></i>
                                        <i className="icon ion-md-remove"></i>
                                    </a>
                                    <div className="answer">
                                        <h2>If you forget your password then UID provide you with forgot password option where you can change your password by accessing to the link you get on your mailID</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </ul>
        </div>
    );
}

export default Row;
