import "./ProjetItem.css";
import { useParams } from "react-router-dom";

const ProjetItem = () => {
  const { id } = useParams;
  return (
    <div className="projetItem">
      <div className="item"></div>
    </div>
  );
};

export default ProjetItem;
