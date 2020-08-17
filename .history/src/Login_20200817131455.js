import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStatevalue } from "./StateProvider";
import { actionTypes } from "./reducer";
function Login() {
  const [state, dispatch] = useStatevalue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({ type: actionTypes.SET_USER });
      })
      .catch((error) => {
        console.log(error.message);
      });
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
