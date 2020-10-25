import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault(); //this stops the refresh
    // do the logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //logged in redirect to home page
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  const register = (e) => {
    e.preventDefault(); // this stops the refresh
    // do the logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name=""
            id=""
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name=""
            id=""
          />
          <button onClick={login} className="login__signInButton" type="submit">
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button
          onClick={register}
          className="login__registerButton"
          type="submit"
        >
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
