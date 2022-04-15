import { useState, useEffect } from "react";
import "./styles/App/App.css";
import SingleCard from "./components/SingleCard";

const cardImages = [
  {"src": "/images/1.png", matched: false},
  {"src": "/images/2.png", matched: false},
  {"src": "/images/5.png", matched: false},
  {"src": "/images/6.png", matched: false},
  {"src": "/images/9.png", matched: false},
  {"src": "/images/10.png", matched: false},
  {"src": "/images/11.png", matched: false},
  {"src": "/images/12.png", matched: false},
  {"src": "/images/4.png", matched: false},
  {"src": "/images/8.png", matched: false}
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [firstSelection, setFirstSelection] = useState(null);
  const [secondSelection, setSecondSelection] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    
    setCards(shuffledCards)
    setTurns(0)
  };
  
  useEffect(() => {
    if(firstSelection && secondSelection) {

      if(firstSelection.src === secondSelection.src) {
        
        resetTurn();
      } else {
        console.log("Not matched")
        resetTurn();
      }
    }
  }, [firstSelection, secondSelection])

  const handleSelection = (card) => {
    firstSelection ? setSecondSelection(card) : setFirstSelection(card);
    console.log(firstSelection, secondSelection)
  }

  const resetTurn = () => {
    setFirstSelection(null);
    setSecondSelection(null);
    setTurns(prevTurn => prevTurn + 1);
  }

  return (
    <div className="App">
      <div className="head">
        <div className="title">Konoha</div>
        <img src="/images/konohaClan.png" className="clan" alt="clan-symbol"/>
      </div>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard
            card={card}
            key={card.id}
            handleSelection={handleSelection}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
