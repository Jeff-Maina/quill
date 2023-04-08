import React from "react";
import Birdie from "../../components/Birdie/birdie";
import LoginForm from "../../components/forms/loginform";
import Books_img from './assets/curve.svg'
import "./login.css";


function LoginPage({toggleNotification}) {
  return (
    <div id="login-page-container">
      <div id="login-form-container">
        <Birdie/>
        <div className="form-row" id="row-left">
          <h1 className="login-webname">Quil.</h1>
          {/* <h4 className="form-phrase">Explore boundless worlds</h4> */}
          <img src={Books_img} alt='books'></img>
        </div>
        <div className="form-row">
          {/* <div className="ring"> </div> */}
          <LoginForm toggleNotification={toggleNotification}/>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
