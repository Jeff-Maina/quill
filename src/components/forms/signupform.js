import { useState } from "react";
import { NavLink } from "react-router-dom";


function Signupform() {

  // password visibility toggling...togglement?..togg..

  const [isVisible, setVisible] = useState(false);

  let passwordInputType = isVisible ? "text" : "password";
  let passwordVisibilityType = isVisible ? "visibility_off" : "visibility";

  let togglePasswordVisibility = () => {
    // pretty sleek man.. ikkkkk.....

    setVisible(!isVisible);
  };


  //  password confirmation logic ( same thing )

  const [isPasswordConfirmVisible, setPasswordConfirmVisible] = useState(false);

  let passwordConfirmInputType = isPasswordConfirmVisible ? "text" : "password";
  let passwordConfirmVisibilityType = isPasswordConfirmVisible ? "visibility_off" : "visibility";

  let togglePasswordConfirmVisibility = () => {

    // still sleek...

       setPasswordConfirmVisible(!isPasswordConfirmVisible);
  };

  return (
    <div className="form-container">
      <form>

        <h1 className="form-title-signup">Sign up</h1>

        <p className="form-msg-signup">
          Join us today by creating an account :)
        </p>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            pattern="[a-zA-Z]+"
            className="form-control"
            placeholder="..."
            required
          />
          <div className="verification-icon-container">
            <i id="person-icon" className="material-symbols-outlined">
              person
            </i>
            <i id="valid-icon" className="material-symbols-outlined">
              done
            </i>
            <i id="invalid-icon" className="material-symbols-outlined">
              close
            </i>
          </div>
        </div>

        <br/>
        <br/>


        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="..."
            required
          />
          <div className="verification-icon-container">
            <i id="person-icon" className="material-symbols-outlined">
              mail
            </i>
            <i id="valid-icon" className="material-symbols-outlined">
              done
            </i>
            <i id="invalid-icon" className="material-symbols-outlined">
              close
            </i>
          </div>
        </div>

        <br/>
        <br/>

        <div className="form-group">
          <label>Password</label>
          <input
            type={passwordInputType}
            className="form-control"
            id="password-input"
            placeholder=".."
            required
          />
          <div className="visibility-icon-container">
            <i
              onClick={() => {
                togglePasswordVisibility();
              }}
              id="visibility-icon"
              className="material-symbols-outlined"
            >
              {passwordVisibilityType}
            </i>
            <i id="lock-icon" className="material-symbols-outlined">
              lock
            </i>
          </div>
        </div>

        <br/>
        <br/>

        <div className="form-group">
          <label>Confim Password</label>
          <input
            type={passwordConfirmInputType}
            className="form-control"
            id="password-input"
            placeholder=".."
            required
          />
          <div className="visibility-icon-container">
            <i
              onClick={() => {
                togglePasswordConfirmVisibility();
              }}
              id="visibility-icon"
              className="material-symbols-outlined"
            >
              {passwordConfirmVisibilityType}
            </i>
            <i id="lock-icon" className="material-symbols-outlined">
              lock
            </i>
          </div>
        </div>

        <br/>

        <button className="form-btn">
          Signup
          <i className="material-symbols-outlined">arrow_forward</i>
        </button>

        <div className="signup-redirect">
          <h5>
            Already have an account?
            <NavLink className="navlink" to="/login">
              Login
            </NavLink>
          </h5>
        </div>

      </form>
    </div>
  );
}

export default Signupform;
