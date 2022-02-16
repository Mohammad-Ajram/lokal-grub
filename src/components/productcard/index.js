import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "react-feather";
import "../../assets/styles/productscard.scss";

const ProductCard = ({ product }) => {
  const [pageNo, setPageNo] = useState(1);
  const { chefname, chefprofile, reviewCnt, totalRating, dish_masters } = product;
  const increasePage = () => {
    if (pageNo === dish_masters.length) setPageNo(1);
    else setPageNo(pageNo + 1);
  };
  const decreasePage = () => {
    if (pageNo === 1) setPageNo(dish_masters.length);
    else setPageNo(pageNo - 1);
  };
  return (
    <div className="product-card-container">
      <div className="images-container">
        <img
          src={`${process.env.REACT_APP_API_ENDPOINT}/${product.dish_masters[pageNo - 1].dishImage}`}
          alt="food"
          className="food-img"
        />
        <button className="arrow-btn left-btn d-flex align-items-center justify-content-center" onClick={decreasePage}>
          <ChevronLeft size={16} strokeWidth="4" />
        </button>
        <button className="arrow-btn right-btn d-flex align-items-center justify-content-center" onClick={increasePage}>
          <ChevronRight size={16} strokeWidth="4" />
        </button>
        <img src={`${process.env.REACT_APP_API_ENDPOINT}/${chefprofile}`} alt="avatar" className="avatar" />
      </div>
      <div className="food-info-container">
        <div className="food-title">{product.dish_masters[pageNo - 1].dishname}</div>
        <div className="chef-name">{chefname}</div>
      </div>
      <div className="bottom-toolbar d-flex">
        <div className="ratings-container d-flex align-items-center justify-content-center flex-grow-1">
          <span className="ratings d-flex justify-content-center align-items-center">
            <span className="me-1">{totalRating}</span> <img src="/images/star.png" alt="star" />
          </span>
          <span className="reviews">({reviewCnt} reviews)</span>
        </div>
        <div className="d-flex align-items-center justify-content-center flex-grow-1">
          <button className="view-details-btn">
            View Details <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
