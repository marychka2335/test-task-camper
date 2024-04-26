import React from 'react';
import css from './Filter.module.css';

export default function Filter() {
  return (
    <>
      <form className={css.form}>
        <div className={css.box}>
          <label htmlFor="car_brand" className={css.label}>
            Car brand
          </label>
          <select name="car_brand" id="car_brand" className={css.select}>
            <option value="">Enter the text</option>
          </select>
        </div>
        <div className={css.box}>
          <label htmlFor="price" className={css.label}>
            Price/ 1 hour
          </label>
          <select name="price" id="price" className={css.select}>
            <option value="">To $</option>
          </select>
        </div>
        <div className={css.box}>
          <label htmlFor="car_mileage" className={css.label}>
            Сar mileage / km
          </label>
          <input type="text" id="car_mileage"/>
        </div>
        <button type="submit" className={css.button}>Search</button>
      </form>
    </>
  );
}