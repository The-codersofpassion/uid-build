import React from 'react';
import "./Footer.css";

function footer() {
    return (
        <footer className="footer">
            <div className="left-text">
                Copyright © 2021 Unique Identification Authority of India All Rights
                Reserved
            </div>
            <div className="col-md-4 col-sm-4 right-text">
                Last reviewed and updated on:<b> 31-July-2021 </b>
            </div>
            <div className="last-text">
                Supports : Firefox 37+ Google Chrome 6.0+ Internet Explorer 9.0+ Safari 4.0+
            </div>
        </footer>
    );
}

export default footer;
