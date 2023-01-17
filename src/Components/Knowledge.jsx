import "./css/Knowledge.css";
import KnowledgeCard from "./Subcomponets/KnowledgeCard";
import { DataKnowledgeCard } from "./Subcomponets/DataCards.js";

const Knowledge = () => {
  

  return (
    <div id="knowledge" className="Knowledge">
      <h2 className="KnowledgeTitle">Skills</h2>
      <div className="GridCards">
        {DataKnowledgeCard.map((KCard) => (
          <KnowledgeCard KCard={KCard} key={KCard.id} />
        ))}
      </div>
    </div>
  );
};

export default Knowledge;
