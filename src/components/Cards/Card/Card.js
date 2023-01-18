import "./Card.css";
import React from "react";

function Card(props){


    return(
<div className="card" onClick={props.onClickCard}>
    <div className="card__header">
        <div className="card__header_block">
            <h2 className="card__header_title">Сказочное заморское яство</h2>
            <p className="card__header_name">Нямушка</p>
            <p className="card__header_taste">{props.taste}</p>
            <p className="card__header_portion">{props.title} порций</p>
            <p className="card__header_portion1">{props.paragraph}</p>
        </div>
        <div className="card__circle">
           <p className="card__circle_text">{props.kg}</p>
            <p className="card__circle_text1">кг</p>
        </div>
    </div>
<p className="card__paragraph">Чего сидишь? Порадуй котэ, <a className="card__paragraph_link">купи.</a></p>
</div>
    );
}

export default Card;
