import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const storagedProducts = await AsyncStorage.getItem(
        '@GoMarketplace:products',
      );
      if (storagedProducts) {
        const loadedProducts: Product[] = JSON.parse(storagedProducts);
        setProducts(loadedProducts);
      }
    }
    loadProducts();
  }, []);

  const addToCart = useCallback(
    async product => {
      const productExists = products.find(item => item.id === product.id);
      let newProducts = [];
      if (productExists) {
        newProducts = products.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        newProducts = [...products, { ...product, quantity: 1 }];
      }
      setProducts(newProducts);
      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(newProducts.filter(item => item.quantity !== 0)),
      );
    },
    [products],
  );

  const increment = useCallback(
    async id => {
      const newProducts = products.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      );
      setProducts(newProducts);
      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(newProducts.filter(item => item.quantity !== 0)),
      );
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const newProducts = products.map(item => {
        if (item.id === id) {
          return item.quantity === 0
            ? item
            : { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setProducts(newProducts);
      await AsyncStorage.setItem(
        '@GoMarketplace:products',
        JSON.stringify(newProducts.filter(item => item.quantity !== 0)),
      );
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
