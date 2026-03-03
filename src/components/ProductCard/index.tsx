import type { ProductCardProps } from '../../@types/product';
import './ProductCard.scss';

export const ProductCard = ({ product, onBuyClick }: ProductCardProps) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const calculateInstallment = (price: number) => {
    const installmentValue = price / 2;
    return installmentValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const oldPrice = product.price * 1.1;

  const handleBuyClick = () => {
    if (onBuyClick) {
      onBuyClick(product);
    }
  };

  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={product.photo} alt={product.productName} />
      </div>
      <div className="product-card__content">
        <h3 className="product-card__name">{product.descriptionShort}</h3>
        <span className="product-card__old-price">
          {formatPrice(oldPrice)}
        </span>
        <span className="product-card__price">{formatPrice(product.price)}</span>
        <span className="product-card__installment">
          ou 2x de {calculateInstallment(product.price)} sem juros
        </span>
        <span className="product-card__shipping">Frete grátis</span>
        <button className="product-card__button" onClick={handleBuyClick}>
          COMPRAR
        </button>
      </div>
    </div>
  );
};
