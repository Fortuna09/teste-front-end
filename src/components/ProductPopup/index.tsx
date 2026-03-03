import { useState } from 'react';
import type { Product } from '../../@types/product';
import './ProductPopup.scss';

interface ProductPopupProps {
  product: Product;
  onClose: () => void;
}

export const ProductPopup = ({ product, onClose }: ProductPopupProps) => {
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="product-popup">
      <div className="product-popup__overlay" onClick={onClose}></div>
      <div className="product-popup__content">
        <button className="product-popup__close" onClick={onClose}>&times;</button>
        
        <div className="product-popup__main">
          <div className="product-popup__image-container">
            <img src={product.photo} alt={product.productName} className="product-popup__image" />
          </div>
          <div className="product-popup__details">
            <h2 className="product-popup__name">{product.productName}</h2>
            <p className="product-popup__price">{formatPrice(product.price)}</p>
            <p className="product-popup__description">{product.descriptionShort}</p>
            <a href="#" className="product-popup__more-details">Veja mais detalhes do produto &gt;</a>
            
            <div className="product-popup__actions">
              <div className="product-popup__quantity-selector">
                <button onClick={handleDecreaseQuantity}>-</button>
                <span>{String(quantity).padStart(2, '0')}</span>
                <button onClick={handleIncreaseQuantity}>+</button>
              </div>
              <button className="product-popup__buy-button" onClick={() => (console.log('Produto comprado:', product))}>COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
