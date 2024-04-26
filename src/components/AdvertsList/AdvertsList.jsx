import React from 'react';
import { useSelector } from 'react-redux';
import css from './AdvertsList.module.css';
import AdvertsItem from 'components/AdvertsItem/AdvertsItem';

export default function AdvertsList() {
  const { adverts } = useSelector(state => state.reducer);

  return (
    <>
      <ul className={css.list}>
        {adverts.map((advert, index) => (
          <AdvertsItem advert={advert} key={index} />
        ))}
      </ul>
    </>
  );
}