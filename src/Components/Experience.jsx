import ExperienceCard from "./Subcomponets/ExperienceCard"
import {DataExperienceCard} from './Subcomponets/DataCards.js'
import "./css/Experience.css"


const Experience = () => {

  return ( 
    <div id="Experience" className="Experience"> 
      <h2 className="Experience_h1">Experience</h2>
      <div className="Experience_gridCards"> 
        {
          DataExperienceCard.map((ECard) => <ExperienceCard ECard={ECard} key={ECard.id}/>)
        }
      </div>
    </div>
  )
};


export default Experience;