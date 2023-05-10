import React from 'react';
import classes from "./Cards.module.css";

const Cards = (props) => {

    function propCheck(prods) {
        console.log(prods);
    }

    return (
        <div className={classes.products}>
            {propCheck(props.productList)}
            {/* <span>
                <img src={props.productList.thumbnail} alt={props.productList.title} />
            </span> */}
        </div>
    )
}

export default Cards;