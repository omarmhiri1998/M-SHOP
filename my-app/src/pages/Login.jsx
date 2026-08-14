import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import useUserStore from "../store/useUserStore";

import "./Login.css";


function Login() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");


  const loginUser = useUserStore(
    (state) => state.loginUser
  );


  const navigate = useNavigate();


  function handleLogin(event) {
    event.preventDefault();


    const success = loginUser(
      email,
      password
    );


    if (success) {
      setError("");

      navigate("/");

      return;
    }


    setError(
      "Incorrect email or password."
    );
  }


  return (
    <section className="login-page">

      <p className="login-label">
        My Account
      </p>


      <h1 className="login-title">
        Log In
      </h1>


      <p className="login-intro">
        Access your account to track your orders
        and manage your favorite gift boxes.
      </p>


      <form
        className="login-form"
        onSubmit={handleLogin}
      >

        <div className="form-group">

          <label htmlFor="email">
            Email Address
          </label>


          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
          />

        </div>


        <div className="form-group">

          <label htmlFor="password">
            Password
          </label>


          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            required
          />

        </div>


        {error && (
          <p className="login-error">
            {error}
          </p>
        )}


        <button
          type="submit"
          className="login-submit"
        >
          LOG IN
        </button>

      </form>


      <p className="login-footer-text">

        Not a member yet?{" "}

        <Link to="/inscription">
          Create an account
        </Link>

      </p>

    </section>
  );
}


export default Login;