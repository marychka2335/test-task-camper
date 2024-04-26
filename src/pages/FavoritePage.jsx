import React, { useState, useEffect } from 'react';
import css from './FavoritePage.module.css';
import Filter from 'components/Filter/Filter';
import AdvertsItem from 'components/AdvertsItem/AdvertsItem';

export default function FavoritePage() {
  const [favoriteAdverts, setFavoriteAdverts] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteAdverts(favorites);
  }, []);


  return (
    <>
      <Filter />
      {favoriteAdverts.length === 0 ? (
        <p>Немає улюблених оголошень.</p>
      ) : (
        <ul className={css.list}>
          {favoriteAdverts.map((advert, index) => (
            <AdvertsItem advert={advert} key={index} />
          ))}
        </ul>
      )}
    </>
  );
}