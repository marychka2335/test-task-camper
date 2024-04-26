import React from 'react';
import css from './Services.module.css';
import carRedemptionImg from '../../images/roadsurfer_camper-castle.jpg';
// import truckImg from '../../images/roadsurfer_camper-castle.jpg';
// import carAbroad from '../../images/roadsurfer_camper-castle.jpg';
// import daileCarImg from '../../images/roadsurfer_camper-castle.jpg';
// import myCarImg from '../../images/roadsurfer_camper-castle.jpg';
// import carHelpWayImg from '../../images/roadsurfer_camper-castle.jpg';

export default function Services() {
  return (
    <>
      <h1 className={css.tittle}>We provide the services for your relax and safety</h1>
      <ul className={css.list}>
      
            <li className={css.item}>
              <button className={css.link}>
                <div className={css.thumb}>
                  <img className={css.img} src={carRedemptionImg} alt="Оренда авто з правом викупу" />
                </div>
                <div className={css.content}>
                  <h2 className={css.itemTitle}>Camper lease</h2>
                </div>
              </button>
            </li>
           
          </ul>
    </>
  );
}