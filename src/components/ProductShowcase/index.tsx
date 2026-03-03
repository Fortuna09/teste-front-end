import { useState, useEffect } from 'react';
import { ProductCard } from '../ProductCard';
import type { ProductShowcaseProps, Product } from '../../@types/product';
import { PRODUCT_TABS } from '../../constants';
import './ProductShowcase.scss';

const getItemsPerPage = () => {
  if (typeof window === 'undefined') return 4;
  if (window.innerWidth <= 480) return 2;
  if (window.innerWidth <= 768) return 2;
  if (window.innerWidth <= 1024) return 3;
  return 4;
};

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
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentIndex(0); // Reset ao redimensionar
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const baseClass = variant === 'related' ? 'related-products' : 'featured-products';
  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const handleBuyClick = (product: Product) => {
    if (onBuyClick) {
      onBuyClick(product);
    }
    console.log('Produto selecionado:', product);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return maxIndex;
      }
      return Math.max(0, prev - itemsPerPage);
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0;
      }
      return Math.min(maxIndex, prev + itemsPerPage);
    });
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);

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
