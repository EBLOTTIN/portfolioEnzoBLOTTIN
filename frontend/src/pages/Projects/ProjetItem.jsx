import "./ProjetItem.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useParams,
} from "react-router-dom";

const ProjetItem = () => {
  const { id } = useParams;
  return (
    <div className="projetItem">
      <div className="item"></div>
    </div>
  );
};

export default ProjetItem;
