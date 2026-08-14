import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import useUserStore from "../store/useUserStore";

import "./Register.css";


function Register() {
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState("");

  const [error, setError] =
    useState("");


  const registerUser = useUserStore(
    (state) => state.registerUser
  );

  const navigate = useNavigate();


  function handleRegister(event) {
    event.preventDefault();


    if (password !== confirmPassword) {
      setError(
        "Passwords do not match."
      );

      return;
    }


    const success = registerUser(
      name,
      email,
      password
    );


    if (!success) {
      setError(
        "An account with this email already exists."
      );

      return;
    }


    setError("");

    navigate("/login");
  }


  return (
    <section className="register-page">

      <p className="register-label">
        MY ACCOUNT
      </p>


      <h1 className="register-title">
        Create an Account
      </h1>


      <p className="register-intro">
        Join Sweet Surrender to keep track
        of your orders and enjoy exclusive
        offers.
      </p>


      <form
        className="register-form"
        onSubmit={handleRegister}
      >

        <div className="form-group">

          <label htmlFor="fullName">
            Full Name
          </label>

          <input
            type="text"
            id="fullName"
            name="fullName"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            required
          />

        </div>


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


        <div className="form-group">

          <label htmlFor="confirmPassword">
            Confirm Password
          </label>

          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(
                event.target.value
              )
            }
            required
          />

        </div>


        {error && (
          <p className="register-error">
            {error}
          </p>
        )}


        <label className="checkbox-group">

          <input
            type="checkbox"
            required
          />

          <span>
            I agree to the Terms and Conditions
          </span>

        </label>


        <button
          type="submit"
          className="register-submit"
        >
          CREATE MY ACCOUNT
        </button>

      </form>


      <p className="register-footer-text">

        Already have an account?{" "}

        <Link to="/login">
          Log In
        </Link>

      </p>

    </section>
  );
}


export default Register;