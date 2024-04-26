import React, { useEffect, useState } from 'react';
import css from './AdvertsItem.module.css';
import icons from '../../images/icons.svg';
import Modal from 'components/Modal/Modal';

export default function AdvertsItem({ advert }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const {
      id,
    img,
    make,
    model,
    year,
    rentalPrice,
    rentalCompany,
    type,
    mileage,
    functionalities,
    address,
  } = advert;

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favorites.some((fav) => fav.id === id)) {
      setIsFavorite(true);
    }
  }, [id]);

  const newAdress = address.split(' ');

  const chartersType = type.split(' ')[0].split('');
  const prepeadedType = chartersType
    .filter(charterType => charterType !== ',')
    .join('');

  const newFunctionalities = functionalities[0]
    .split(' ')
    .splice(0, 2)
    .join(' ');

  const toggleToFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      const updatedFavorites = favorites.filter((fav) => fav.id !== id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      favorites.push(advert);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  const openModal = () => {
    setIsOpenModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpenModal(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      <li className={css.item}>
        <div className={css.boxImg}>
          <img src={img} alt={make} stroke={'#3470FF'} className={css.img} />
          <svg
            width={18}
            height={18}
            className={css.icon}
            onClick={toggleToFavorite}
          >
            {isFavorite ? (
              <use href={`${icons}#active`}></use>
            ) : (
              <use href={`${icons}#normal`}></use>
            )}
          </svg>
        </div>
        <div className={css.mainInfoBox}>
          <h2 className={css.tittleCard}>
            {make} <span className={css.modelCard}>{model}</span>,{' '}
            <span>{year}</span>
          </h2>
          <p className={css.priceCard}>{rentalPrice}</p>
        </div>
        <div className={css.infoBox}>
          <span>{newAdress[3]} |</span>
          <span> {newAdress[4]} |</span>
          <span> {rentalCompany} |</span>
          <span> Premium |</span>
          <span> {prepeadedType} |</span>
          <span> {model} |</span>
          <span> {mileage} |</span>
          <span> {newFunctionalities}</span>
        </div>
        <button type="submit" className={css.button} onClick={openModal}>
          Learn more
        </button>
      </li>
      {isOpenModal && (
        <Modal
          active={isOpenModal}
          setActive={closeModal}
          carDetail={advert}
        />
      )}
    </>
  );
}