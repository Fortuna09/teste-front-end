import { useState } from 'react';
import { ProductCard } from '../ProductCard';
import type { ProductShowcaseProps, Product } from '../../@types/product';
import { PRODUCT_TABS } from '../../constants';
import './ProductShowcase.scss';

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

  const baseClass = variant === 'related' ? 'related-products' : 'featured-products';

  const handleBuyClick = (product: Product) => {
    if (onBuyClick) {
      onBuyClick(product);
    }
    console.log('Produto selecionado:', product);
  };

  if (loading) {
    return <div className={`${baseClass}__loading`}>Carregando...</div>;
  }

  return (
    <section className={baseClass}>
      <div className={`${baseClass}__wrapper`}>
        <button className={`${baseClass}__arrow ${baseClass}__arrow--left`}>
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
            {products.slice(0, 4).map((product, index) => (
              <ProductCard 
                key={index} 
                product={product} 
                onBuyClick={handleBuyClick}
              />
            ))}
          </div>
        </div>

        <button className={`${baseClass}__arrow ${baseClass}__arrow--right`}>
          &#8250;
        </button>
      </div>
    </section>
  );
};
