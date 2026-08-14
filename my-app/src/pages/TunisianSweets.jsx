import { tunisianSweets } from '../data/tunisianSweets';
import './TunisianSweets.css';

function TunisianSweets() {
  return (
    <section className="sweets-page">
      <div className="sweets-header">
        <p className="sweets-label">THE Boutique</p>

        <h1 className="sweets-title">Tunisian Delicacies</h1>

        <p className="sweets-intro">
          A sweet heritage passed down through generations, crafted with
          exquisite ingredients and timeless savoir-faire.
        </p>
      </div>

      <div className="sweets-grid">
        {tunisianSweets.map((sweet) => (
          <div className="sweet-card" key={sweet.id}>
            <div className="sweet-image">
              <img src={sweet.image} alt={sweet.name} />
            </div>

            <p className="sweet-category">{sweet.category}</p>

            <h3 className="sweet-name">{sweet.name}</h3>

            <p className="sweet-description">
              {sweet.description}
            </p>

            <div className="sweet-footer">
              <span className="sweet-price">{sweet.price} €</span>

              <button className="sweet-add">
                ADD 
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TunisianSweets;