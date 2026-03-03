import './Categories.scss';
//imports dos icones
import iconTecnologia from '../../assets/icons/tecnology.png';
import iconSupermercado from '../../assets/icons/supermarket.png';
import iconBebidas from '../../assets/icons/drink.png';
import iconFerramentas from '../../assets/icons/construction.png';
import iconSaude from '../../assets/icons/health.png';
import iconEsportes from '../../assets/icons/sports.png';
import iconModa from '../../assets/icons/fashion.png';

const categories = [
  { name: 'Tecnologia', icon: iconTecnologia },
  { name: 'Supermercado', icon: iconSupermercado },
  { name: 'Bebidas', icon: iconBebidas },
  { name: 'Ferramentas', icon: iconFerramentas },
  { name: 'Saúde', icon: iconSaude },
  { name: 'Esportes e Fitness', icon: iconEsportes },
  { name: 'Moda', icon: iconModa },
];

export const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <ul className="categories__list">
          {categories.map((category) => (
            <li key={category.name} className="categories__item">
              <div className="categories__icon-wrapper">
                <img src={category.icon} alt={category.name} className="categories__icon" />
              </div>
              <span className="categories__name">{category.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
