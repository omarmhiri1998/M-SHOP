import './CookieCollections.css';
const collections = [
  {
    title: 'Classics',
    description: 'Les recettes fondatrices de la maison : beurre AOP, chocolat noir et fleur de sel.',
  },
  {
    title: 'Seasonal',
    description: 'Des éditions limitées au rythme des saisons, façonnées en petites fournées.',
  },
  {
    title: 'Gifting',
    description: 'Coffrets rubannés à la main, prêts à offrir, avec mot personnalisé.',
  },
];

function CookieCollections() {
  return (
    <section className="collections">
      <h2 className="collections-title">Cookie Collections</h2>
      <div className="collections-underline"></div>

      <div className="collections-grid">
        {collections.map((item, index) => (
          <div className="collection-item" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CookieCollections;