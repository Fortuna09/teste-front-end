import { useState } from 'react';
import { ProductCard } from '../ProductCard';
import type { ProductShowcaseProps, Product } from '../../@types/product';
import { PRODUCT_TABS } from '../../constants';
import './ProductShowcase.scss';

const ITEMS_PER_PAGE = 4;

export const ProductShowcase = ({ 
  variant, 
  title = 'Produtos relacionados',
  showTabs = false,
  showViewAll = false,
  products,
  loading = false,
  onBuyClick
}: ProductShowcaseProps) => {
  const [activeTab, setActiveTab] = useState<string>(PRODUCT_TABS[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const baseClass = variant === 'related' ? 'related-products' : 'featured-products';

  const handleBuyClick = (product: Product) => {
    if (onBuyClick) {
      onBuyClick(product);
    }
    console.log('Produto selecionado:', product);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - ITEMS_PER_PAGE;
      return newIndex < 0 ? Math.max(0, products.length - ITEMS_PER_PAGE) : newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + ITEMS_PER_PAGE;
      return newIndex >= products.length ? 0 : newIndex;
    });
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + ITEMS_PER_PAGE);

  if (loading) {
    return <div className={`${baseClass}__loading`}>Carregando...</div>;
  }

  return (
    <section className={baseClass}>
      <div className={`${baseClass}__wrapper`}>
        <button 
          className={`${baseClass}__arrow ${baseClass}__arrow--left`}
          onClick={handlePrevious}
          aria-label="Produtos anteriores"
        >
          &#8249;
        </button>

        <div className={`${baseClass}__container`}>
          <h2 className={`${baseClass}__title`}>{title}</h2>
          
          {showTabs && (
            <div className={`${baseClass}__tabs`}>
              {PRODUCT_TABS.map((tab) => (
                <button
                  key={tab}
                  className={`${baseClass}__tab ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          )}

          {showViewAll && (
            <button className={`${baseClass}__view-all`}>Ver todos</button>
          )}

          <div className={`${baseClass}__grid`}>
            {visibleProducts.map((product, index) => (
              <ProductCard 
                key={product.price || index} 
                product={product} 
                onBuyClick={handleBuyClick}
              />
            ))}
          </div>
        </div>

        <button 
          className={`${baseClass}__arrow ${baseClass}__arrow--right`}
          onClick={handleNext}
          aria-label="Próximos produtos"
        >
          &#8250;
        </button>
      </div>
    </section>
  );
};
