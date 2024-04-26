import React from 'react';
import css from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={css.header}>
        <div className={css.container}>
          <Link to="/" className={css.logo}>Rental Car</Link>
          <nav className={css.list}>
            <Link to="/" className={css.link}>Головна</Link>
            <Link to="/catalog" className={css.link}>Каталог авто</Link>
            <Link to="/favorites" className={css.link}>Обране</Link>
          </nav>
        </div>
    </header>
  );
}