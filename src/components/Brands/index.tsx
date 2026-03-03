import './Brands.scss';
import logoEconverse from '../../assets/logo-econverse.png';

export const Brands = () => {
  const brands = [1, 2, 3, 4, 5];

  return (
    <section className="brands">
      <h2 className="brands__title">Navegue por marcas</h2>
      <div className="brands__container">
        {brands.map((_, index) => (
          <div key={index} className="brands__item">
            <img 
              src={logoEconverse} 
              alt="Econverse" 
              className="brands__logo"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
