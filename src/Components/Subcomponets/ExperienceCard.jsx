import {useState} from 'react'
import "./css/ExperienceCard.css";


const ExperienceCard = ({ ECard }) => {

  const [Move, setMove] = useState(false)

  const MoveMouseImg = () => { 
    setMove(true)
  }
  const MouseLeaveImg = () => {
    setMove(false)
  }

  return (
    <div className="ExperienceCard">
      <p className="ExperienceCard_title">{ECard.title}</p>

      {!Move ?
        <img onMouseEnter={MoveMouseImg} className="ExperienceCard_image" src={ECard.image} alt="imagen" />
        :
        <div onMouseLeave={MouseLeaveImg} className='Experience_types'>{ECard.technologies}</div>
      }

      <div className="Buttons_Type">
        <div className="Container_buttons">
          
          <a href={ECard.website} target="_blank" rel="noreferrer">
            <button className="Experience_buttons">WebSite</button>
          </a>
          
          <a href={ECard.repository} target="_blank" rel="noreferrer">
            <button className="Experience_buttons">Repository</button>
          </a>
          
        </div>
        <h2 className="type">{ECard.type}</h2>
      </div>
    </div>
  );
};

export default ExperienceCard;
