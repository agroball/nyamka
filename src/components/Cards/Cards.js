import "./Cards.css";
import Card from "./Card/Card";
import {initialCards} from "../../vendor/constants";

function Cards(props) {

return(
    <div className="cards">
        {
            initialCards.map((cardsObj) =>(
                <Card
                taste={cardsObj.taste}
                title={cardsObj.title}
                paragraph={cardsObj.paragraph}
                kg={cardsObj.kg}
                onCardClick={props.onCardClick}
                selectCard={props.selectCard}
                />

            ))}
    </div>
);
}

export default Cards;
