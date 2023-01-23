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
        <div onMouseLeave={MouseLeaveImg} className='Experience_types'>

          <div className='Container_items'>
            <div className='item_tecnologe'>{ECard.Html}</div>
            <div className='item_tecnologe'>{ECard.Css}</div>
            <div className={ECard.JavaScript? 'item_tecnologe': 'unableItem'}>{ECard.JavaScript}</div>
          </div>
          <div className='Container_items'>
            <div className={ECard.React? 'item_tecnologe': 'unableItem'}>{ECard.React}</div>
            <div className={ECard.Node? 'item_tecnologe': 'unableItem'}>{ECard.Node}</div>
            <div className={ECard.Express? 'item_tecnologe': 'unableItem'}>{ECard.Express}</div>
            <div className={ECard.MySQL? 'item_tecnologe': 'unableItem'}>{ECard.MySQL}</div>
          </div>
        </div>
      }

      <div className="Buttons_Type">
        <div className="Container_buttons">
          
          <a href={ECard.website} target="_blank" rel="noreferrer">
            <button className={ECard.website? "Experience_buttons" : "unableItem"}>WebSite</button>
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
