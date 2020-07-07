import React from 'react';

export default function RestaurantCategories({ categories, onClick, selected }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button type="button" onClick={onClick} name={category.name}>
            {category.name}
            {selected && category.name === selected.name && '(V)'}
          </button>
        </li>
      ))}
    </ul>
  );
}