import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <section className="register-page">
      <p className="register-label">MY ACCOUNT</p>

      <h1 className="register-title">Create an Account</h1>

      <p className="register-intro">
        Join Sweet Surrender to keep track of your orders and enjoy
        exclusive offers.
      </p>

      <form className="register-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
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
            required
          />
        </div>

        <label className="checkbox-group">
          <input type="checkbox" required />
          <span>I agree to the Terms and Conditions</span>
        </label>

        <button type="submit" className="register-submit">
          CREATE MY ACCOUNT
        </button>
      </form>

      <p className="register-footer-text">
        Already have an account?{' '}
        <Link to="/login">Log In</Link>
      </p>
    </section>
  );
}

export default Register;