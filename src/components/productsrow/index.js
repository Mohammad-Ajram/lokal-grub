import React, { useState } from "react";
import { ArrowRight, ArrowLeft } from "react-feather";
import ProductCard from "../productcard";
import "../../assets/styles/productsrow.scss";

const ProductsRow = ({ popularWeekFoodList }) => {
  const [pageDetails, setPageDetails] = useState({
    pageNo: 1,
    pageSize: 3,
  });
  const { pageNo, pageSize } = pageDetails;
  const increasePage = () => {
    if (Math.ceil(popularWeekFoodList.length / pageSize) > pageNo)
      setPageDetails((prev) => ({ ...prev, pageNo: pageNo + 1 }));
  };
  const decreasePage = () => {
    if (pageNo > 1) setPageDetails((prev) => ({ ...prev, pageNo: pageNo - 1 }));
  };
  const isLastPage = Math.ceil(popularWeekFoodList.length / pageSize) === pageNo;
  return (
    <div className="products-row-container container">
      <div className="products-row-header d-flex justify-content-between align-items-center">
        <div className="title">Popular Weekly Food</div>
        <div className="toolbar d-flex">
          <button
            className={`arrow-btn d-flex justify-content-center align-items-center me-2 ${
              pageNo === 1 ? "disabled" : ""
            }`}
            onClick={decreasePage}
          >
            <ArrowLeft size={20} />
          </button>
          <button
            className={`arrow-btn d-flex justify-content-center align-items-center ${isLastPage ? "disabled" : ""}`}
            onClick={increasePage}
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
      <div className="products-row row">
        {popularWeekFoodList
          .filter((item, index) => index < pageNo * pageSize && index >= (pageNo - 1) * pageSize)
          .map((item) => (
            <div key={item.chefId} className="col-4">
              <ProductCard product={item} />
            </div>
          ))}
        {/* <div className="col-4">
          <ProductCard />
        </div>
        <div className="col-4">
          <ProductCard />
        </div>
        <div className="col-4">
          <ProductCard />
        </div> */}
      </div>
    </div>
  );
};

export default ProductsRow;
