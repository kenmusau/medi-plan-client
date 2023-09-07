import React, { useState } from "react";
import LogInForm from "../LogInForm/LogInForm";
import SignUpForm from "../SignUpForm/SignUpForm";
import "./login.css";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      {showLogin ? (
        <>
          <LogInForm onLogin={onLogin} />
          <p className="login_text">
            Don't have an account? &nbsp;
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />

          <p className="login_text">
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}

export default Login;
