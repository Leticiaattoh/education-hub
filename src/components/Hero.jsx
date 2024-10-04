
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";

const Hero = () => {
    return <section className="hero">

        <div className="overlay">
            <div className="hero-text">
                <h1>Learning Center for <br />Your Kids</h1>
                <p>
                    Another free template by Colorlib. Far far away, <br /> behind the word mountains, far from the countries <br />Vokalia and Consonantia, there live the blind texts.
                </p>
                <div>
                    <button>EXPLORE NOW</button>
                </div>

            </div>
            <div >
                <button className="button-play"><FontAwesomeIcon icon={faPlay} fontSize='2em' />
                </button>
            </div>

        </div>



     


    </section>

};




export default Hero;
