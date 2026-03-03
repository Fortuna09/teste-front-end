export const PRODUCT_TABS = [
  'CELULAR',
  'ACESSÓRIOS',
  'TABLETS',
  'NOTEBOOKS',
  'TVS',
  'VER TODOS'
] as const;

export const NAV_CATEGORIES = [
  'TODAS CATEGORIAS',
  'SUPERMERCADO',
  'LIVROS',
  'MODA',
  'LANÇAMENTOS',
  'OFERTAS DO DIA'
] as const;

export type ProductTab = typeof PRODUCT_TABS[number];
export type NavCategory = typeof NAV_CATEGORIES[number];
