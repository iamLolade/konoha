import "../styles/SingleCard/SingleCard.css"

const SingleCard = ({ card, handleSelection, flipped }) => {

    const handleClick = () => {
        handleSelection(card)
    };

    return (  
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
              <img src={card.src} alt="card front" className="front"/>
              <img 
                src="/images/cover.png"
                alt="card back" 
                className="back"
                onClick={handleClick}
            />
            </div>
        </div>
    );
}
 
export default SingleCard;