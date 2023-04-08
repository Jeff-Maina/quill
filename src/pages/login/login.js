import React from "react";
import Birdie from "../../components/Birdie/birdie";
import LoginForm from "../../components/forms/loginform";
import "./login.css";


function LoginPage({toggleNotification}) {
  return (
    <div id="login-page-container">
      <div id="login-form-container">
        <Birdie/>
        <div className="form-row" id="row-left">
        </div>
        <div className="form-row">
          <LoginForm toggleNotification={toggleNotification}/>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
