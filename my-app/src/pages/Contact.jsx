import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <p className="contact-label">Contact Us</p>
      <h1 className="contact-title">Contact</h1>
      <p className="contact-intro">
      Have a question, a special order, or a collaboration idea? We’d love to hear from you. Send us a message and we'll get back to you within 48 hours.
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" required></textarea>
        </div>

        <button type="submit" className="contact-submit">SEND</button>
      </form>
    </section>
  );
}

export default Contact;