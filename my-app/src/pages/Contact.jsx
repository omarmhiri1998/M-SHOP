import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './Contact.css';

function Contact() {
  return (
    <>
      <Header />
      <section className="contact">
        <p className="contact-label">NOUS ÉCRIRE</p>
        <h1 className="contact-title">Contact</h1>
        <p className="contact-intro">
          Une question, une commande spéciale, une envie de collaboration ?
          Écrivez-nous, nous répondons sous 48h.
        </p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required></textarea>
          </div>

          <button type="submit" className="contact-submit">ENVOYER</button>
        </form>
      </section>
      <Footer />
    </>
  );
}

export default Contact;