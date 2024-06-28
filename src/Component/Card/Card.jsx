import React from "react";
import "./Card.css";
import { CiCalendar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";


const Card = ({element}) => {
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
        <p>{element.description} </p>
        <button>
          Read more <FaArrowRight className='arrow' />
        </button>
      </div>
    </div>
  );
};

export default Card;
