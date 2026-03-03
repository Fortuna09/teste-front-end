import { useState } from 'react';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Categories } from './components/Categories';
import { ProductShowcase } from './components/ProductShowcase';
import { Partners } from './components/Partners';
import { Brands } from './components/Brands';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ProductPopup } from './components/ProductPopup';
import { useProducts } from './hooks/useProducts';
import type { Product } from './@types/product';
import './styles/main.scss';

function App() {
  const { products, loading } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleBuyClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleClosePopup = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Header />
      <main className="main-content">
        <Banner />
        <Categories />
        <ProductShowcase 
          variant="related" 
          showTabs 
          products={products}
          loading={loading}
          onBuyClick={handleBuyClick}
        />
        <Partners />
        <ProductShowcase 
          variant="featured" 
          showViewAll 
          products={products}
          loading={loading}
          onBuyClick={handleBuyClick}
        />
        <Partners />
        <Brands />
        <ProductShowcase 
          variant="featured" 
          showViewAll 
          products={products}
          loading={loading}
          onBuyClick={handleBuyClick}
        />
        <Newsletter />
      </main>
      <Footer />

      {selectedProduct && (
        <ProductPopup product={selectedProduct} onClose={handleClosePopup} />
      )}
    </>
  );
}

export default App;