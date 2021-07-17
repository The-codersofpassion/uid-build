import React, { useEffect} from 'react';

function Row() {
    
    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://unpkg.com/ionicons@4.5.10-0/dist/ionicons.js";
        script.async = true;
      
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
      }, []);

    return (
        <div>
            <ul>
                <ul>
                    <li>
                        <h2>Get Your Unique Identification Number</h2>
                        <h3>UID is for every individual irrespective of age.</h3>
                        <p>From a new born to an adult every one can enroll for UID</p>
                        <ul>
                            <li><a href="./">Check UID status</a></li>
                            <li><a href="./">Download UID</a></li>
                            <li><a href="./">Book your UID</a> </li>
                        </ul>
                    </li>
                    <li>
                        <h2>Update UID</h2>
                        <h3>Keep Your UID details up-to-date</h3>
                        <p>It is essential to keep your UID details correct and updated always</p>
                        <ul>
                            <li><a href="./">check UID update status</a></li>
                            <li><a href="./">UID update history</a></li>
                        </ul>
                    </li>
                    <li>
                        <h2>UID services</h2>
                        <h3>An array of services for UID holders</h3>
                        <p>UID registered mobile number is essential to access the following services</p>
                        <ul>
                            <li><a href="./">Verify UID number</a></li>
                            <li><a href="./">Verify Email/Mobile number</a></li>
                            <li><a href="./">Lock/Unlock Details</a></li>
                        </ul>
                    </li>
                    <li>
                        <h1>What is UID?</h1>
                        <p>UID is a 10 digit Unique Identification number that acts as ID and lets you store all the details at one place.</p>
                        <ul>
                            <li><a href="./">GET UID</a></li>
                            <li><a href="./">About UID</a></li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h2>Frequently Asked Questions</h2>
                        <div className="container">
                            <div className="accordian">
                                <div className="accordian-item" id="question1">
                                    <a href="#question1">
                                        Are my documents safe here?
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </ul>
        </div>
    )
}

export default Row;
