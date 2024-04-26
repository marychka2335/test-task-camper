import React from 'react';
import css from './SharedLayout.module.css';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

export default function SharedLayout() {
  return (
    <>
      <Header />
      <main>
        <div className={css.container}>
          <Outlet />
        </div>
      </main>
    </>
  );
}