import "../styles/App/App/css";
import Header from "../components/Header";

const Home = () => {
    return ( 
        <div className="home">
            <Header />
            <div className="input">
                <input type="text" placeholder="YOUR NAME"/>
                <button>Start Game</button>
            </div>
        </div>
     );
}
 
export default Home;