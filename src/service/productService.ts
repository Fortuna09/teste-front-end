import type { ApiResponse } from '../@types/product';

const API_BASE_URL = '/api';

export const productService = {
  async getProducts(): Promise<ApiResponse> {
    const response = await fetch(
      `${API_BASE_URL}/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`
    );
    
    if (!response.ok) {
      throw new Error('Erro ao buscar produtos');
    }
    
    return response.json();
  }
};
