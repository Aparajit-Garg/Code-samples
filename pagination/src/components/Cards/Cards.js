import React from 'react';
import classes from "./Cards.module.css";

const Cards = (props) => {

    function propCheck() {
        console.log(props)
    }

    return (
        <div className={classes.products}>
            {props.products.map((prods) => {
                <span key={prods.id}>
                    <img src={prods.thumbnail} alt={prods.title}/>
                    <span>{prods.title}</span>
                </span>
            })}
        </div>
    )
}

export default Cards;