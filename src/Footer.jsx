import React from 'react';
import './Footer.css'; // Assuming we use a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2 className="logo2">ENG <span>MATES</span></h2>
          <div className="footer-para">
          <p>We have 20+ years of experience providing unique teaching methods and live activity-based learning.</p>
          </div>
        </div>

        <div className="footer-connect">
          <h3>CONNECT</h3>
          <p><strong>Address:</strong> No.30/3A, 3rd Floor, Metro Station Gate, Gali No. 3, opp. Tilak Nagar</p>
          <p><strong>Phone Number:</strong> <a href="tel:9319629093">9319629093</a></p>
          <p><strong>Email:</strong> <a href="mailto:info@engmates.com">info@engmates.com</a></p>
        </div>

        <div className="footer-call-back">
          <h3>REQUEST FREE CALL BACK</h3>
          <form>
            <input type="text" placeholder="Enter Your Phone Number" />
            <button type="submit">CALL BACK</button>
          </form>
         
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 - 2025 Engmates | <a href="#">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
