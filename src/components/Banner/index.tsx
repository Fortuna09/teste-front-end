import './Banner.scss';

export const Banner = () => {
  return (
    <section className="banner" aria-label="Promoções em destaque">
      <div className="banner__content-wrapper">
        <article className="banner__content">
          <h1>Venha conhecer nossas promoções</h1>
          <p className="banner__discount">50% Off nos produtos</p>
          <button type="button" aria-label="Ver produtos em promoção">Ver produto</button>
        </article>
      </div>
    </section>
  );
};
