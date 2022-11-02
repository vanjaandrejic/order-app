import React from 'react'
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

export default function Header(props) {
  return (
    <>
        <header className={classes.header}>
            <h1>MealsOrder</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt='A table full of delicious food!' />
        </div>
    </>
  )
}
