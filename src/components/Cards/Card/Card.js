import "./Card.css";

function Card(props){

    return(
<div className="card">
    <div className="card__header">
        <div className="card__header_block">
            <h2 className="card__header_title">Сказочное заморское яство</h2>
            <p className="card__header_name">Нямушка</p>
            <p className="card__header_taste">{props.taste}</p>
            <p className="card__header_portion">10 порций</p>
            <p className="card__header_portion1">мышь в подарок</p>
        </div>
        <div className="card__circle">
           <p className="card__circle_text">0,5</p>
            <p className="card__circle_text1">кг</p>
        </div>
    </div>
<p className="card__paragraph">Чего сидишь? Порадуй котэ, <a className="card__paragraph_link">купи.</a></p>
</div>
    );
}

export default Card;
