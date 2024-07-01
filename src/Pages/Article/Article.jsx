import "./Article.css";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Article = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);

  const goBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <div className="top-image">
        <img src={location.state.cardState.urlToImage} alt="" />
        </div>

        <div className="article-head">
          <h4>{location.state.cardState.title}</h4>

          <p>{location.state.cardState.description} </p>
        </div>
      <button className="btn" onClick={goBack}>
        <FaArrowLeft />
        Back to hompage
      </button>
    </div>
  );
};

export default Article;
