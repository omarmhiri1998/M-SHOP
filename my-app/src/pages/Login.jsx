import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <section className="login-page">
      <p className="login-label">MON COMPTE</p>
      <h1 className="login-title">Connexion</h1>
      <p className="login-intro">
        Accédez à votre espace pour suivre vos commandes et vos coffrets favoris.
      </p>

      <form className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" required />
        </div>

        <button type="submit" className="login-submit">SE CONNECTER</button>
      </form>

      <p className="login-footer-text">
        Pas encore de compte ? <Link to="/inscription">Créer un compte</Link>
      </p>
    </section>
  );
}

export default Login;