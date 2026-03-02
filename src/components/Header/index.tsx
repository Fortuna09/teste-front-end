import './Header.scss';


export const Header = () => {
  return (
    <header className="header">
      {/* 1. Barra de Benefícios (Top) */}
      <div className="header__top-bar">
        <div className="container">
          <span><img src="/src/assets/icons/safe.png" alt="Seguro" />Compra <strong>100% segura</strong></span>
          <span><img src="/src/assets/icons/truck.png" alt="Frete" /><strong>Frete grátis</strong> acima de R$ 200</span>
          <span><img src="/src/assets/icons/card.png" alt="Cartão" /><strong>Parcele</strong> suas compras</span>
        </div>
      </div>

      {/* 2. Header Principal */}
      <div className="header__main">
        <div className="container">
          <div className="header__logo">
            <img src="/src/assets/logo-econverse.png" alt="Econverse Logo" />
          </div>
          
          <div className="header__search">
            <input type="text" placeholder="O que você está buscando?" />
            <button className="search-icon">
              <img src="/src/assets/icons/search.png" alt="Buscar" />
            </button> 
          </div>

          <div className="header__actions">
            <img src="/src/assets/icons/box.png" alt="Pedidos" className="icon icon--small" />
            <img src="/src/assets/icons/heart.png" alt="Favoritos" className="icon" />
            <img src="/src/assets/icons/user.png" alt="Minha Conta" className="icon" />
            <img src="/src/assets/icons/cart.png" alt="Carrinho" className="icon" />
          </div>
        </div>
      </div>

      {/* 3. Navegação de Categorias */}
      <nav className="header__nav">
        <div className="container">
          <ul>
            <li>TODAS CATEGORIAS</li>
            <li>SUPERMERCADO</li>
            <li>LIVROS</li>
            <li>MODA</li>
            <li>LANÇAMENTOS</li>
            <li>OFERTAS DO DIA</li>
            <li><img src="/src/assets/icons/premium.png" alt="" className="nav-icon" />ASSINATURA</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};