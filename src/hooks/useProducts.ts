import { useState, useEffect } from 'react';
import type { Product, ApiResponse } from '../@types/product';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar produtos:", err);
        setLoading(false);
      });
  }, []);

  return { products, loading };
};