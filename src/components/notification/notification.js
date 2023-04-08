import React, { useState } from "react";
import './notification.css'

function Notification() {


    return ( 
        <div className="notif-active notif-success" id="notification-container">

            <div className="notif-section alert-section"></div>
            <div className="notif-section message-section">
                <h4>Login successful </h4>
            </div>
            <div className="notif-section btn-section">
                <i className="material-icons">close</i>
            </div>


        </div>
     );
}

export default Notification;