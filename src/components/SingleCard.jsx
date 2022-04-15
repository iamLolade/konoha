import "../styles/SingleCard/SingleCard.css"

const SingleCard = ({ card }) => {
    return (  
        <div className="cards">
            <div>
              <img src={card.src} alt="card front" className="front"/>
              <img src="/images/cover.png" alt="card back" className="back" />
            </div>
        </div>
    );
}
 
export default SingleCard;