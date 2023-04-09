import React from "react";
import './signup.css';
import Birdie from "../../components/Birdie/birdie";
import Books_img from './assets/curve.svg'
import Signupform from "../../components/forms/signupform";


function SignupPage() {
    return ( 
        <div id="signup-page-container">
        <div id="signup-form-container">
          <Birdie/>
          <div className="form-row" id="signup-row-left">
          <h1 className="login-webname">Quil.</h1>
          {/* <img src={Books_img} alt='books'></img> */}
          </div>
          <div className="form-row">
            <Signupform/>
          </div>
        </div>
      </div>
     );
}

export default SignupPage;