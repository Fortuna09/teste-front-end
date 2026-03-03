import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Categories } from './components/Categories';
import { ProductShowcase } from './components/ProductShowcase';
import { Partners } from './components/Partners';
import { Brands } from './components/Brands';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { useProducts } from './hooks/useProducts';
import type { Product } from './@types/product';
import './styles/main.scss';

function App() {
  const { products, loading } = useProducts();

  const handleBuyClick = (product: Product) => {
    console.log('Comprar produto:', product);
  };

  return (
    <div className="app">
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;