import React, { useState } from "react";
import "./notification.css";

// animates from the top

const PrimaryNotification = ({
  notifType,
  notifState,
  toggleNotification,
  notifMessage,
}) => {
  return (
    <div
      className={`notif-primary-${notifState} notif-${notifType}`}
      id="notification-container"
    >
      <div className="notif-section alert-section"></div>
      <div className="notif-section message-section">
        <h4>{notifMessage}</h4>
      </div>
      <div className="notif-section btn-section">
        <i
          onClick={() => {
            toggleNotification();
          }}
          className="material-icons"
        >
          close
        </i>
      </div>
    </div>
  );
};

// animates from the bottom left corner;

const SecondaryNotification = ({
  notifType,
  notifState,
  toggleNotification,
  notifMessage,
}) => {
  return (
    <div
      className={`notif-secondary-${notifState} notif-${notifType}`}
      id="notification-container"
    >
      <div className="notif-section alert-section"></div>
      <div className="notif-section message-section">
        <h4>{notifMessage}</h4>
      </div>
      <div className="notif-section btn-section">
        <i
          onClick={() => {
            toggleNotification();
          }}
          className="material-icons"
        >
          close
        </i>
      </div>
    </div>
  );};

  // animates from the top left corner;

const TertiaryNotification = ({
  notifType,
  notifState,
  toggleNotification,
  notifMessage,
}) => {
  return (
    <div
      className={`notif-tertiary-${notifState} notif-${notifType}`}
      id="notification-container"
    >
      <div className="notif-section alert-section"></div>
      <div className="notif-section message-section">
        <h4>{notifMessage}</h4>
      </div>
      <div className="notif-section btn-section">
        <i
          onClick={() => {
            toggleNotification();
          }}
          className="material-icons"
        >
          close
        </i>
      </div>
    </div>
  );};

  

function Notification({
  notifType,
  notifState,
  toggleNotification,
  notifMessage,
  notifLevel,
}) {
  if (notifLevel === "primary") {
    return (
      <PrimaryNotification
        notifType={notifType}
        notifState={notifState}
        toggleNotification={toggleNotification}
        notifMessage={notifMessage}
      />
    );
  } else if (notifLevel === "secondary") {
    return (
      <SecondaryNotification
        notifType={notifType}
        notifState={notifState}
        toggleNotification={toggleNotification}
        notifMessage={notifMessage}
      />
    );
  } else if (notifLevel === "tertiary") {
    return (
      <TertiaryNotification
        notifType={notifType}
        notifState={notifState}
        toggleNotification={toggleNotification}
        notifMessage={notifMessage}
      />
    );
  }
}
export default Notification;
