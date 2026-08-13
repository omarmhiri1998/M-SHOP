import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
  return (
    <section className="register-page">
      <p className="register-label">MON COMPTE</p>
      <h1 className="register-title">Créer un compte</h1>
      <p className="register-intro">
        Rejoignez Sweet Surrender pour suivre vos commandes et profiter
        d'offres exclusives.
      </p>

      <form className="register-form">
        <div className="form-group">
          <label htmlFor="fullName">Nom complet</label>
          <input type="text" id="fullName" name="fullName" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input type="password" id="password" name="password" required />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            required
          />
        </div>

        <label className="checkbox-group">
          <input type="checkbox" required />
          <span>J'accepte les conditions générales de vente</span>
        </label>

        <button type="submit" className="register-submit">
          CRÉER MON COMPTE
        </button>
      </form>

      <p className="register-footer-text">
        Déjà un compte ? <Link to="/login">Se connecter</Link>
      </p>
    </section>
  );
}

export default Register;