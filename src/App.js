import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Notification from "./components/notification/notification";
import Homepage from "./pages/homepage/homepage";
import LoginPage from "./pages/login/login";
import SignupPage from "./pages/signup/signup";

function App() {


  // logic for handling notifications....ik..there are better approaches

  let [notifState, setNotifState] = useState("inactive");
  let [notifType, setNotifType] = useState("success");
  let [notifMessage, setNotifMessage] = useState("");
  let [notifLevel, setNotifLevel] = useState("primary");

  let toggleNotification = (notification_type, notification_msg, notification_level)=>{
    if(notifState === "active"){
        setNotifState("inactive");
    }
    else{
        setNotifState("active");
        setNotifType(notification_type);
        setNotifMessage(notification_msg);
        setNotifLevel(notification_level); 
    }

    setTimeout(()=>{
        setNotifState("inactive");
  },3000);
  }

  return (
    <div className="App">
      <Notification
       notifState={notifState}
       notifType={notifType}
       toggleNotification={toggleNotification}
       notifMessage={notifMessage}
       notifLevel={notifLevel}
       />

      <Switch>
        <Route exact path="/login">
          <LoginPage toggleNotification={toggleNotification}/>
        </Route>

        <Route exact path="/signup">
          <SignupPage />
        </Route>

        <Route exact path = '/homepage'>
          <Homepage/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
