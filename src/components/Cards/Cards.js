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
                />
                
            ))}
    </div>
);
}

export default Cards;
