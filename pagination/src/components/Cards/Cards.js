import React from 'react';
import classes from "./Cards.module.css";

const Cards = (props) => {

    function propCheck(prods) {
        console.log(prods);
    }

    return (
        <div className={classes.products}>
            <span>
                <img src={props.productList.thumbnail} alt={props.productList.title} />
                <span>{props.productList.title}</span>
            </span>
        </div>
    )
}

export default Cards;