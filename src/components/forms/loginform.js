import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./forms.css";

function LoginForm({toggleNotification}) {

  // password visibility toggling...togglement?..togg..

  const [isVisible, setVisible] = useState(false);

  let passwordInputType = isVisible ? "text" : "password";
  let passwordVisibilityType = isVisible ? "visibility_off" : "visibility";

  let togglePasswordVisibility = () => {
    // pretty sleek man.. ikkkkk.....

    setVisible(!isVisible);
  };

  return (
    <div className="form-container">
      <form>
        <h1 className="form-title">Login</h1>

        <p className="form-msg">
          Welcome Back. Please enter your details to login :)
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

        <div className="error-box">
          <h5>Invalid username</h5>
        </div>

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

        <div className="error-box">
          <h5>Invalid Password</h5>
        </div>

        <div className="checkbox-group">
          <span>
            <input type="checkbox" className="form-checkbox" required />
            <h5>Remember me?</h5>
          </span>

          <h5 className="password-forgot-msg">Forgot your password?</h5>
        </div>

        <button onClick={()=>{
          toggleNotification("success","login failed",'tertiary')
        }} className="form-btn">
          Login
          <i className="material-symbols-outlined">arrow_forward</i>
        </button>

        <div className="form-redirect">
          <h5>
            Don't have an account?
            <NavLink className="navlink" to="/signup">
              Sign up
            </NavLink>
          </h5>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
