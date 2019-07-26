import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';



const burger = (props)  => {
    let transformdIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) =>{
          return <BurgerIngredient key={igKey + i} type={igKey}/>; 
        });
    })
    .reduce((arr, el ) => {
        return arr.concat(el)
    }, []);
    if(transformdIngredients.length === 0) {
             transformdIngredients = <p>please start adding ingredients!</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformdIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}


export default burger;