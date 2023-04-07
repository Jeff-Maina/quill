import React from "react";
import './signup.css';
import Birdie from "../../components/Birdie/birdie";
import Signupform from "../../components/forms/signupform";


function SignupPage() {
    return ( 
        <div id="signup-page-container">
        <div id="signup-form-container">
          <Birdie/>
          <div className="form-row" id="row-left">
          </div>
          <div className="form-row">
            <Signupform/>
          </div>
        </div>
      </div>
     );
}

export default SignupPage;