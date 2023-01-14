import "./css/Knowledge.css"
import KnowledgeCard from './Subcomponets/KnowledgeCard'
import {DataKnowledgeCard} from './Subcomponets/DataCards.js'

const Knowledge = () => {  

    const Data = DataKnowledgeCard
    
    return (
      <div id="knowledge" className="Knowledge">
        <p className="KnowledgeTitle">Knowledge</p>
        <div className="GridCards">
          {Data.map((KCard) => (
            <KnowledgeCard KCard={KCard} key={KCard.id} />
          ))}
        </div>
      </div>
    );
}

export default Knowledge;