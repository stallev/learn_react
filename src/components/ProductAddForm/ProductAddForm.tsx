import React, { useState } from 'react';

import styles from './styles/product-add-form.module.scss';

import { ProductProps } from '../Product/Product';

interface ProductAddFormProps {
  onAddProduct: (product: Omit<ProductProps, 'id' | 'rating'>) => void;
}

const ProductAddForm: React.FC<ProductAddFormProps> = ({ onAddProduct }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newProduct: Omit<ProductProps, 'id' | 'rating'> = {
      title,
      price: Number(price),
      description,
      category,
      image,
      onDelete: () => {}, // Пустая функция, так как не используется в форме добавления
    };

    onAddProduct(newProduct);

    // Сбросить значения полей после добавления продукта
    setTitle('');
    setPrice('');
    setDescription('');
    setCategory('');
    setImage('');
  };

  return (
    <form className={styles['product-add-form']} onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
        required
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL"
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductAddForm;
