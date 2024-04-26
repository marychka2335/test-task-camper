import React, { useEffect } from 'react';
import css from './Modal.module.css';
import icons from '../../images/icons.svg';

export default function Modal({ active, setActive, carDetail }) {
  const {
    id,
    img,
    make,
    model,
    year,
    rentalPrice,
    type,
    mileage,
    functionalities,
    address,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    rentalConditions,
  } = carDetail;

  useEffect(() => {
    const closeEscape = e => {
      if (e.code === 'Escape') {
        setActive(false);
      }
    };
    window.addEventListener('keydown', closeEscape);

    return () => {
      window.removeEventListener('keydown', closeEscape);
    };
  }, [setActive]);

  const newAdress = address.split(' ');
  const chartersType = type.split(' ')[0].split('');
  const prepeadedType = chartersType
    .filter(charterType => charterType !== ',')
    .join('');

  const newRentalConditions = rentalConditions.split('\n');
  const newAccessories = accessories.join(' | ');
  const newFunctionalities = functionalities.join(' | ');
  console.log(newFunctionalities);

  const newMilage = (mileage / 1000).toLocaleString(undefined, {
    minimumFractionDigits: 3,
  });

  const preparedMinAgeConditions = (element, index) => {
    if (!index) {
      const itemArray = element.split(' ');
      const lastElItem = itemArray.splice(itemArray.length - 1, 1);
      const newItem = itemArray.join(' ');
      const newItemValue = lastElItem.join('');

      return (
        <p className={css.condition} key={index}>
          {newItem}: <span className={css.value}>{newItemValue}</span>
        </p>
      );
    }

    return (
      <p className={css.condition} key={index}>
        {element}
      </p>
    );
  };

  return (
    <div className={css.modal} onClick={() => setActive(false)}>
      <div className={css.modalContent} onClick={e => e.stopPropagation()}>
        <svg
          width={24}
          height={24}
          className={css.icon}
          onClick={() => setActive(false)}
        >
          <use href={`${icons}#close`}></use>
        </svg>
        <div className={css.thumb}>
          <img src={img} alt={make} className={css.img} />
        </div>
        <h2 className={css.tittleCard}>
          {make} <span className={css.modelCard}>{model}</span>,{' '}
          <span>{year}</span>
        </h2>
        <div className={css.infoBox}>
          <span>{newAdress[3]} |</span>
          <span> {newAdress[4]} |</span>
          <span> id: {id} |</span>
          <span> Year: {year} |</span>
          <span> Type: {prepeadedType} |</span>
          <span> Fuel Consumption: {fuelConsumption} |</span>
          <span> Engine Size: {engineSize}</span>
        </div>
        <p className={css.description}>{description}</p>
        <p className={css.detail}>Accessories and functionalities:</p>
        <p className={`${css.infoBox} ${css.accessories}`}>{newAccessories}</p>
        <p className={`${css.infoBox} ${css.functionalities}`}>
          {newFunctionalities}
        </p>
        <p className={css.detail}>Rental Conditions: </p>
        <div className={css.boxCondition}>
          {newRentalConditions.map((item, index) =>
            preparedMinAgeConditions(item, index)
          )}
          <p className={css.condition}>
            Mileage: <span className={css.value}>{newMilage}</span>
          </p>
          <p className={css.condition}>
            Price: <span className={css.value}>{rentalPrice}</span>
          </p>
        </div>
        <a href="tel:+380730000000" className={css.linkTel}>Rental car</a>
      </div>
    </div>
  );
}