import React from "react";
import "./newsCard.css";

// const NewsCard = () => {
//props
const NewsCard = ({ title, description, date }) => {
  return (
    <div className='newsCardContainer'>
      <h1>{title}</h1>
      <h5 className='decription'>{description}</h5>
      <p>{date}</p>
    </div>
  );
};

export default NewsCard;
