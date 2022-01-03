import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firebaseApp } from "./firebase";
import { useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    const auth = getAuth(firebaseApp);
    signInWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    const auth = getAuth(firebaseApp);
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <a href="/">
        <img className="login_logo" src="images/logo2.svg" />
      </a>

      <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h5>Email</h5>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="login_signinButton">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Shafi's Amazon's Clone Conditions of Use &
          Sale. Please see our privacy notice, our Cookies notice and our
          intresets-based ads
        </p>

        <p>Don't have an account? Create one and get started.</p>

        <button
          type="submit"
          onClick={register}
          className="login_registerButton"
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
