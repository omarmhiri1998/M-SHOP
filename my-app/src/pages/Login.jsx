import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <section className="login-page">
      <p className="login-label">My Account</p>
      <h1 className="login-title">Log In</h1>
      <p className="login-intro">
      Access your account to track your orders and manage your favorite gift boxes.
      </p>

      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button type="submit" className="login-submit">LOG IN</button>
      </form>

      <p className="login-footer-text">
      Not a member yet? <Link to="/inscription">Create an account</Link>
      </p>
    </section>
  );
}

export default Login;