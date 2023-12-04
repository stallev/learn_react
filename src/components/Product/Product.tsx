import React from 'react'

import styles from './styles/product.module.scss';

export interface ProductProps {
  id: number
  title: string
  price: number
  description?: string
  category?: string
  image?: string
  rating?: Rating
  onDelete: (id: number) => void;
}

export interface Rating {
  rate: number
  count: number
}

const Product:React.FC<ProductProps> = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  onDelete,
}) => {
  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <div className={styles.product}>
      <h2>{title}</h2>
      <p>{price}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Product
