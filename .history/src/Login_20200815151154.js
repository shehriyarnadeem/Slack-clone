import React from "react";
import "./Login.css";
function Login() {
  const signIn = () => {
    auth;
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://assets.brandfolder.com/pl546j-7le8zk-btwjnu/original/Slack_RGB.png"
          alt=""
        />
        <h1>Sign in to clever programmer HQ</h1>
        <button onClick={signIn}>Sign In with Google</button>
      </div>
    </div>
  );
}

export default Login;
