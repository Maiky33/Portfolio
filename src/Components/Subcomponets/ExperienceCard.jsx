import "./css/ExperienceCard.css";

const ExperienceCard = ({ ECard }) => {
  return (
    <div className="ExperienceCard">
      <p className="ExperienceCard_title">{ECard.title}</p>

      <img className="ExperienceCard_image" src={ECard.image} alt="imagen" />

      <div className="Buttons_Type">
        <div className="Container_buttons">
          <button className="Experience_buttons">
            <a href={ECard.website} target="_blank" rel="noreferrer">
              WebSite
            </a>
          </button>
          <button className="Experience_buttons">
            <a href={ECard.repository} target="_blank" rel="noreferrer">
              Repository
            </a>
          </button>
        </div>
        <h2>{ECard.type}</h2>
      </div>
    </div>
  );
};

export default ExperienceCard;
