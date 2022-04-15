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

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages].sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))

  };

  return (
    <div className="App">
      <div className="title">Konoha</div>
      <button>New Game</button>
    </div>
  );
}

export default App;
