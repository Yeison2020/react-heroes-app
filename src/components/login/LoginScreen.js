import React from "react";
import { useNavigate } from "react-router";

const LoginScreen = () => {
  // Beutiful how the navigate work using the funtion hook
  const navigate = useNavigate();
  const handleLogin = () => {
    // Passing this allows me to send the login to the path I need it to go, but replace: true make it possible to go back into the login page again
    navigate("/", {
      replace: true,
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login Page</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
