import React, { useState, useEffect } from 'react';
import MenuCard from './menu-card/menu-card';
import Categories from './categories/categories';
import items from './data/data';
import './App.css';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const allCategories = ['all', ...new Set(items.map((item) => item.category))];
    setCategories(allCategories);
  }, []);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>House 1770</h2>
          <h4>FINE DINING & WINE TESTING</h4>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <MenuCard items={menuItems} />
      </section>
    </main>
  );
}

export default App;
