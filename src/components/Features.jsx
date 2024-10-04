
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboard } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
   return (
      <div className="after-hero" >

      <div className="box-1">
         <span className="font-border">
         <span className="fa-fa"><FontAwesomeIcon icon={faChalkboard} /></span>
         </span>
         
          <h1>Learn</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>

      <div className="box-2" >
         <span className="font-border">
      <span className="fa-fa"><FontAwesomeIcon icon={faChalkboard} /></span>
      </span>
          <h1>Play</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
      </div>

      <div className="box-3" >
      <span className="font-border">
      <span className="fa-fa"><FontAwesomeIcon icon={faChalkboard} /></span>
        </span>
          <h1>Meal</h1>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

      </div>


  </div>

   )

};


export default Features;

