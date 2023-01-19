import "./Card.css";
import React, {useState} from "react";

function Card(props){

    // const [selectCard, setSelectCard] = useState("");
    //
    // const handleClick = () => {
    //     setSelectCard((prevState) => {
    //         if(prevState === ""){
    //             setSelectCard("card__header_selected");
    //         } else if (prevState === "active") {
    //             setSelectCard("card__header_disabled");
    //         } else if(prevState === "disabled"){
    //             setSelectCard("");
    //         }
    //     });
    // }


    const [selectCardClick, setSelectCardClick] = useState(props.selectCard);

    function handleClick() {
        setSelectCardClick(!selectCardClick);
    }


    return(
<div className="card" onClick={props.onCardClick}>
    <div className={`card__header ${selectCardClick}`}>
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
