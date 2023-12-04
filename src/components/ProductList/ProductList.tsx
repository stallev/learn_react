import React, { useEffect, useState } from 'react';
import ProductAddForm from '../ProductAddForm/ProductAddForm';
import Product from '../Product/Product';

import styles from './styles/product-list.module.scss';

import { ProductProps } from '../Product/Product';

const Productlist:React.FC = () => {
  const [productList, setProductList] = useState<ProductProps[]>([]);

  const fetchProducts = async() => {
    const productListData: ProductProps[] = await fetch('https://fakestoreapi.com/products?limit=5')
      .then(res=>res.json());
    console.log(productListData)
    setProductList(productListData);
  }

  const handleDeleteProduct = (productId: number) => {
    const updatedProductList = productList.filter((product) => product.id !== productId);
    setProductList(updatedProductList);
  };

  const handleAddProduct = (newProduct: Omit<ProductProps, 'id' | 'rating'>) => {
    const addedProduct: ProductProps = {
      ...newProduct,
      id: productList.length + 1,
      rating: { rate: 0, count: 0 },
      onDelete: handleDeleteProduct,
    };
    setProductList((prevState) => [...prevState, addedProduct]);
  };

  useEffect(() => {
    if(!productList.length) {
      fetchProducts();
    }
  }, [])
  return (
    <div className={styles['product-list']}>
      <ProductAddForm onAddProduct={handleAddProduct} />

      {
        productList.map((item) => {
          return (
            <Product
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              category={item.category}
              image={item.image}
              rating={item.rating}
              onDelete={handleDeleteProduct}
            />
          )
        })
      }
    </div>
  )
};

export default Productlist;
