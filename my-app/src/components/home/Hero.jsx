import heroImage from '../../assets/images/landing-page-img.png';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.35)), url(${heroImage})`, }}>
      <div className="hero-overlay">
        <h1>Sweet Surrender</h1>
        <p>Biscuits artisanaux, façonnés avec passion</p>
        <button className="hero-btn">SHOP NOW</button>
      </div>
    </section>
  );
}

export default Hero;