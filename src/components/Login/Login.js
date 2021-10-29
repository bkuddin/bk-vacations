import React from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../contexts/useAuth";

const Login = () => {
  const { signInUsingGoogle } = useAuth();

  // Login after Auto Redirect

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/";

  // Handle Google
  const handleGoogle = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_uri);
    });
  };
  return (
    <div>
      <h2>This is Login Page</h2>

      {/* Sign in with Google */}
      <div className="my-5">
        <button className="bk-button" onClick={handleGoogle}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
