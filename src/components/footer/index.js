import React from "react";
import "../../assets/styles/footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content d-flex flex-column align-items-center">
        <img src="/images/logo.png" alt="logo" className="logo" />
        <div className="social-icons-container d-flex align-items-center">
          <div className="social-icon mx-4">
            <img src="/icons/facebook.png" alt="social-icon" />
          </div>
          <div className="social-icon mx-4">
            <img src="/icons/linkedin.png" alt="social-icon" />
          </div>
          <div className="social-icon mx-4">
            <img src="/icons/instagram.png" alt="social-icon" />
          </div>
        </div>
        <div className="footer-menu d-flex">
          <div className="menu-item active">HOME</div>
          <div className="menu-item">ABOUT US</div>
          <div className="menu-item">HOW IT WORKS?</div>
          <div className="menu-item">MENUS</div>
          <div className="menu-item">PROFILE</div>
        </div>
      </div>
      <div className="bottom-content">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="copyright">All Rights Are Reserved © 2021 Lokal Grub | Designed by Cart Geek</div>
          <div className="icons-container d-flex align-items-center">
            <img src="/icons/visa.png" alt="icon" className="me-2" />
            <img src="/icons/master-card.png" alt="icon" className="me-2" />
            <img src="/icons/american-express.png" alt="icon" className="me-2" />
            <img src="/icons/discover.png" alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
