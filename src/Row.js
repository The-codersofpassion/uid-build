import React , {useState }from 'react';
import { Link } from 'react-router-dom';
import "./Row.css";

function Row() {
    const [ans1, Showans1] = useState(false)
    const [ans2, Showans2] = useState(false)
    const [ans3, Showans3] = useState(false)
    const [ans4, Showans4] = useState(false)

    const setans1 = () => {
        if(ans1 === true){
            Showans1(false)
        }
        else{
            Showans1(true);
        }
    }
    const setans2 = () => {
        if(ans2 === true){
            Showans2(false)
        }
        else{
            Showans2(true);
        }
    }
    const setans3 = () => {
        if(ans3 === true){
            Showans3(false)
        }
        else{
            Showans3(true);
        }
    }
    const setans4 = () => {
        if(ans4 === true){
            Showans4(false)
        }
        else{
            Showans4(true);
        }
    }

    return (
        <div className="rows">
            <ul className="Ids">
                <li className="idli">
                    <h2>Get Your Unique Identification Number</h2>
                    <h3>UID is for every individual irrespective of age.</h3>
                    <p>From a new born to an adult everyone can enroll for UID</p>
                    <ul className="sublinks">
                        <li><Link to='/Status'>Check UID status</Link></li>
                        <li><Link>|</Link></li>
                        <li><Link to='/'>Download UID</Link></li>
                        <li><Link>|</Link></li>
                        <li><Link to='/'>Book your UID</Link></li>
                    </ul>
                </li>
                <li className="idli">
                    <h2>Update UID</h2>
                    <h3>Keep Your UID details up-to-date</h3>
                    <p>It is essential to keep your UID details correct and updated always</p>
                    <ul className="sublinks">
                        <li><Link to='/'>check UID update status</Link></li>
                        <li><Link>|</Link></li>
                        <li><Link to='/'>UID update history</Link></li>
                    </ul>
                </li>
                <li className="idli">
                    <h2>UID services</h2>
                    <h3>An array of services for UID holders</h3>
                    <p>UID registered mobile number is essential to access the following services</p>
                    <ul className="sublinks">
                        <li><Link to='/'>Verify UID number</Link></li>
                        <li><Link>|</Link></li>
                        <li><Link to='/'>Verify Email/Mobile number</Link></li>
                        <li><Link>|</Link></li>
                        <li><Link to='/'>Lock/Unlock Details</Link></li>
                    </ul>
                </li>
                <li className="idli">
                    <h1>What is UID?</h1>
                    <h3>UID is a 10 digit Unique Identification number that acts as ID and lets you store all the details at one place.</h3>
                    <ul className="sublinks">
                        <li><Link to='/'>GET UID</Link></li>
                        <li><Link>|</Link></li>
                        <li><Link to='/'>About UID</Link></li>
                    </ul>
                </li>
            </ul>
            <div className="questions">
                <ul className="questions2">
                    <h1>Frequently Asked Questions</h1>
                    <li >
                        <div className="accordian accordian-item">
                            Are my documents safe here?<button onClick={setans1}>🔽</button>
                        </div>
                        {ans1 && 
                            <h2 className="answer">Yes your details and documents are safe here until and unless you keep your details and mobile number updated because UID has a three step verification system that protects your account from getting hacked. </h2>
                        }
                    </li>
                    <li >
                        <div className="accordian accordian-item" >
                            What if I lost my registered mobile number ?<button onClick={setans2}>🔽</button>
                        </div>
                        {ans2 && 
                            <h2 className="answer">If you lost your registered mobile number then you can access the otp from your email also and after logging in immediately update your new mobile number.</h2>
                        }
                    </li>
                    <li >
                        <div className="accordian accordian-item">
                            Can I access my account from anywhere and at anytime?<button onClick={setans3}>🔽</button>
                        </div>
                        {ans3 && 
                            <h2 className="answer">You can access your account at anytime and from anywhere by allowing the access to new device from verification email that you will receive on your registered mailID after you try to login. </h2>
                        }

                    </li>
                    <li >
                        <div className="accordian accordian-item" >
                            What if i forgot the password ?<button onClick={setans4}>🔽</button>
                        </div>
                        {ans4 && 
                            <h2 className="answer">If you forget your password then UID provide you with forgot password option where you can change your password by accessing to the link you get on your mailID</h2>
                        }
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Row;
