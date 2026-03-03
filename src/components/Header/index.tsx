import logo from '../../assets/logo-econverse.png';
import safeIcon from '../../assets/icons/safe.png';
import truckIcon from '../../assets/icons/truck.png';
import cardIcon from '../../assets/icons/card.png';
import searchIcon from '../../assets/icons/search.png';
import boxIcon from '../../assets/icons/box.png';
import heartIcon from '../../assets/icons/heart.png';
import userIcon from '../../assets/icons/user.png';
import cartIcon from '../../assets/icons/cart.png';
import premiumIcon from '../../assets/icons/premium.png';
import { NAV_CATEGORIES } from '../../constants';
import './Header.scss';


export const Header = () => {
  return (
    <header className="header">
      {/*vantagens */}
      <div className="header__top-bar">
        <div className="container">
          <span><img src={safeIcon} alt="Seguro" />Compra <strong>100% segura</strong></span>
          <span><img src={truckIcon} alt="Frete" /><strong>Frete grátis</strong> acima de R$ 200</span>
          <span><img src={cardIcon} alt="Cartão" /><strong>Parcele</strong> suas compras</span>
        </div>
      </div>

      {/*header main */}
      <div className="header__main">
        <div className="container">
          <div className="header__logo">
            <img src={logo} alt="Econverse Logo" />
          </div>
          
          <div className="header__search">
            <input type="text" placeholder="O que você está buscando?" />
            <button className="search-icon">
              <img src={searchIcon} alt="Buscar" />
            </button> 
          </div>

          <nav className="header__actions" aria-label="Ações do usuário">
            <button type="button" aria-label="Meus Pedidos" className="icon-btn">
              <img src={boxIcon} alt="" aria-hidden="true" className="icon icon--small" />
            </button>
            <button type="button" aria-label="Favoritos" className="icon-btn">
              <img src={heartIcon} alt="" aria-hidden="true" className="icon" />
            </button>
            <button type="button" aria-label="Minha Conta" className="icon-btn">
              <img src={userIcon} alt="" aria-hidden="true" className="icon" />
            </button>
            <button type="button" aria-label="Carrinho de Compras" className="icon-btn">
              <img src={cartIcon} alt="" aria-hidden="true" className="icon" />
            </button>
          </nav>
        </div>
      </div>

      {/*nav categorias */}
      <nav className="header__nav" aria-label="Categorias principais">
        <div className="container">
          <ul role="menubar">
            {NAV_CATEGORIES.map((category) => (
              <li key={category} role="menuitem">{category}</li>
            ))}
            <li role="menuitem"><img src={premiumIcon} alt="" aria-hidden="true" className="nav-icon" />ASSINATURA</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};