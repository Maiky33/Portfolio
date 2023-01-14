import "./css/KnowledgeCard.css"

const KnowledgeCard = ({ KCard }) => { 
    return ( 
        <div className="KCard">
            <img className="KCard_image" alt="imagen" src={KCard.image}/>
            <p>{KCard.title}</p>
        </div>
    )
}

export default KnowledgeCard;