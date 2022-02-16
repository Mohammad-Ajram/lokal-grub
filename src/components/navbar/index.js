import React, { useState } from "react";
import Datetime from "react-datetime";
import moment from "moment";
import { ChevronLeft, ChevronRight } from "react-feather";
import "../../assets/styles/navbar.scss";
import "react-datetime/css/react-datetime.css";

const Navbar = ({ cuisineList }) => {
  const [pageDetails, setPageDetails] = useState({
    pageNo: 1,
    pageSize: 9,
  });
  const [date, setDate] = useState("");
  const { pageNo, pageSize } = pageDetails;
  const increasePage = () => {
    if (Math.ceil(cuisineList.length / 9) > pageNo) setPageDetails((prev) => ({ ...prev, pageNo: pageNo + 1 }));
    else setPageDetails((prev) => ({ ...prev, pageNo: 1 }));
  };
  const decreasePage = () => {
    if (pageNo === 1) setPageDetails((prev) => ({ ...prev, pageNo: Math.ceil(cuisineList.length / pageSize) }));
    else setPageDetails((prev) => ({ ...prev, pageNo: pageNo - 1 }));
  };
  const renderInput = (props, openCalendar, closeCalendar) => {
    return (
      <div className="delivery-day-selector" onClick={openCalendar}>
        {date ? moment(date).format("DD-MM-YYYY") : "Select a delivery day"}
        <img src={"/icons/filter.png"} className="filter-icon" alt="icon" />
        <img src={"/icons/chevrondown.png"} className="chevron-down-icon" alt="icon" />
      </div>
    );
  };
  return (
    <header className="navbar-container">
      <div className="topbar d-flex justify-content-center">
        <span className="text-white">Free Delivery on all</span>&nbsp;<span className="text-red">orders over $25</span>
      </div>
      <div className="main-navbar-container">
        <div className="main-navbar d-flex justify-content-between container">
          <img src={"/images/logo.png"} className="logo" alt="logo" />
          <div className="nav-right-section d-flex align-items-center">
            <button className="custom-btn custom-btn-outline-primary become-a-chef-btn">Become a Chef</button>
            <button className="custom-btn custom-btn-primary login-btn">Login</button>
          </div>
        </div>
      </div>
      <div className="food-menu d-flex justify-content-center">
        <button className="arrow-btn mx-4" onClick={decreasePage}>
          <ChevronLeft />
        </button>
        {cuisineList.slice((pageNo - 1) * pageSize, pageNo * pageSize).map((item) => (
          <div key={item.id} className="d-flex flex-column align-items-center mx-4">
            <img src={`${process.env.REACT_APP_API_ENDPOINT}/${item.imageUrl}`} className="mb-2" alt="category-icon" />
            <span className="font-weight-bold text-center">{item.name}</span>
          </div>
        ))}
        <button className="arrow-btn mx-4" onClick={increasePage}>
          <ChevronRight />
        </button>

        <Datetime
          locale="en"
          renderInput={renderInput}
          value={date}
          dateFormat="YYYY-MM-DD"
          timeFormat={false}
          closeOnSelect={true}
          className="delivery-day-selector-container"
          onChange={(e) => setDate(e._d)}
        />
      </div>
    </header>
  );
};

export default Navbar;
