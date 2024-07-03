import "./Card.css";
import { CiCalendar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import {useNavigate} from "react-router-dom"


const Card = ({element}) => {
  const navigate = useNavigate()
const handleClick = () =>  {
  navigate("/article", {state: {cardState: element}}); 
}
const dateStr = "2024-07-02T09:37:16Z";
const date = new Date(dateStr);

const day = date.getUTCDate();
const month = date.toLocaleString('default', { month: 'long' });
const year = date.getUTCFullYear();

const ordinalSuffix = (n) => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

const formattedDate = `${month} ${ordinalSuffix(day)}, ${year}`;
// console.log(formattedDate); // Output: July 2nd, 2024

  return (
    <div className="div-class1">
      <div className="image1">
        <img src={element.urlToImage} alt="image" />
      </div>
      <div className='text-word'>
        <div className="calender">
          <CiCalendar />
          <span>{formattedDate}</span>
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
