import React, { useState } from "react";
import "./notification.css";

function Notification() {
  const [notifState, setNotifState] = useState("active");

  let toggleNotification = ()=>{
    if(notifState === "active"){
        setNotifState("inactive");
    }
    else{
        setNotifState("active");
    }
  };

  return (
    <div
      className={`notif-${notifState} notif-success`}
      id="notification-container"
    >
      <div className="notif-section alert-section"></div>
      <div className="notif-section message-section">
        <h4>Login successful </h4>
      </div>
      <div className="notif-section btn-section">
        <i onClick={()=>{toggleNotification()}} className="material-icons">close</i>
      </div>
    </div>
  );
}

export default Notification;
