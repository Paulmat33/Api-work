import React from "react";
import "./Article.css";
import { FaArrowLeft } from "react-icons/fa";


const Article = () => {
  return (
    <div>
      <div className="top-image">
        <img src="" alt="" />
      </div>

      <div className="article-head">
        <h4>The 2020 World's Most Valueable Brands</h4>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          ornare convallis non etiam tincidunt tincidunt. Non dolor vel purus
          id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus
          commodo mauris enim, turpis blandit. Porttitor facilisi viverra mi
          lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet
          nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel
          facilisis amet placerat ultrices lobortis proin nulla. Molestie tellus
          sed pellentesque tortor vitae eu cras nisl. Sem facilisi amet vitae
          ultrices nullam tellus. Pellentesque eget iaculis morbi at quis eget
          lacus, aliquam etiam. Neque ipsum, placerat vel convallis nulla orci,
          nunc etiam. Elementum risus facilisi mauris diam amet et sed.
        </p>
        <p></p>
        <p></p>
        <p></p>
      </div>
      <FaArrowLeft/> <button className="btn">Back to hompage</button>
    </div>
  );
};

export default Article;
