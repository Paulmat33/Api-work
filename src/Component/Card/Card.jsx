import "./Card.css";
import { CiCalendar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import {useNavigate} from "react-router-dom"


const Card = ({element}) => {
  const navigate = useNavigate()
const handleClick = () =>  {
  navigate("/article", {state: {cardState: element}}); 
}
  return (
    <div className="div-class1">
      <div className="image1">
        <img src={element.urlToImage} alt="image" />
      </div>
      <div className='text-word'>
        <div className="calender">
          <CiCalendar />
          <span>June 29th, 2021</span>
        </div>
        <h3>{element.title}</h3>
        <p>{element.description.slice(0,99)}... </p>
        <button onClick={handleClick}>
          Read more <FaArrowRight className='arrow' />
        </button>
      </div>
    </div>
  );
};

export default Card;
