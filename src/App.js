import { useState } from "react";
import "./styles/App/App.css"

const cardImages = [
  {"src": "/images/1.png"},
  {"src": "/images/2.png"},
  {"src": "/images/5.png"},
  {"src": "/images/6.png"},
  {"src": "/images/9.png"},
  {"src": "/images/10.png"},
  {"src": "/images/11.png"},
  {"src": "/images/12.png"},
  {"src": "/images/4.png"},
  {"src": "/images/8.png"}
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0)

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
    
    setCards(shuffledCards)
    setTurns(0)
  };
  console.log(cards, turns)
  return (
    <div className="App">
      <div className="title">Konoha</div>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map(card => (
          <div className="cards" key={card.id}>
            <div>
              <img src={card.src} alt="card front" className="front"/>
              <img src="/images/cover.png" alt="card back" className="back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
