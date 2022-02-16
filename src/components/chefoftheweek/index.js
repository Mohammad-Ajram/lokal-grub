import React from "react";
import { ArrowRight } from "react-feather";
import "../../assets/styles/chefoftheweek.scss";

const ChefOfTheWeek = ({ chefWeek }) => {
  const { chefprofile, chefname, totalRating, reviewCnt, aboutChef } = chefWeek;
  return (
    <div className="chef-of-the-week-container">
      <h2 className="title text-center">Chef Of The Week</h2>
      <div className="container chef-details-container p-0 d-flex">
        <div className="chef-image-container">
          <img src={`${process.env.REACT_APP_API_ENDPOINT}/${chefprofile}`} alt="chef" className="chef-img" />
          <div className="logo-sm-container d-flex align-items-center justify-content-center">
            <img src="/images/logosm.png" alt="logo" className="logo-sm" />
          </div>
        </div>
        <div className="chef-details-container">
          <div className="d-flex justify-content-between align-items-center chef-details-header">
            <h4 className="chef-title">{chefname}</h4>
            <div className="ratings-container">
              <span className="me-2">{reviewCnt}</span>
              <img src="/images/star.png" alt="star" className="star me-2" />
              <span>({totalRating} reviews)</span>
            </div>
          </div>
          <p className="chef-info">
            {typeof aboutChef === "string" && aboutChef.slice(0, 264)}{" "}
            {typeof aboutChef === "string" && aboutChef.length > 264 ? "..." : ""}
          </p>
          <button className="view-details-btn">
            View Details <ArrowRight size={16} className="ms-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefOfTheWeek;
