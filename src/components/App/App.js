import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "../Header/Header";
import Cards from "../Cards/Cards";



function App(props) {

    const [selectCard, setSelectCard] = useState("");


    const handleClick = () => {
        setSelectCard((prevState) => {
            if(prevState === ""){
                setSelectCard("card__header_selected");
            } else if (prevState === "card__header_selected") {
                setSelectCard("disabled");
            } else if(prevState === "card__header_disabled"){
                setSelectCard("");
            }
        });
    }




  return (
    <div className="App">
      <header className="App-header">
<Header/>
<Cards
 onHandleClick = {handleClick}
 selectCard={selectCard}
/>
      </header>
    </div>
  );
}

export default App;
