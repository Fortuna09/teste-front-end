import './Banner.scss';

export const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__content-wrapper">
        <div className="banner__content">
          <h1>Venha conhecer nossas promoções</h1>
          <h2>50% Off nos produtos</h2>
          <button>Ver produto</button>
        </div>
      </div>
    </section>
  );
};
