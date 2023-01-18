import React, {useState} from 'react';
import './App.css';
import Header from "../Header/Header";
import Cards from "../Cards/Cards";



function App() {

    const [selectCard, setSelectCard] = useState(false);

    function handleSubmit() {
        setSelectCard(true);
    }


  return (
    <div className="App">
      <header className="App-header">
<Header/>
<Cards
onClickCard={handleSubmit}
/>
      </header>
    </div>
  );
}

export default App;
