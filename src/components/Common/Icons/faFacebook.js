import React from 'react';
import { faFacebook } from '../Common/Icons/faFacebook';
import Mixpanel from 'mixpanel-browser';
Mixpanel.init('YOUR_MIXPANEL_PROJECT_TOKEN');

const LoginButton = () => {
  const handleLogin = (success) => {
    Mixpanel.track("Login Attempt", {
      "Method": "Facebook",
      "Location": "Login Page",
      "Success": success.toString()
    });
  };

  return (
    <button
      type="button"
      aria-label="Login with Facebook"
      className="login-with-facebook"
      onClick={() => handleLogin(true)} // Assuming success is true for demonstration
    >
      <img src={faFacebook} alt="Login with Facebook" />
    </button>
  );
};

export default LoginButton;