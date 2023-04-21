import React from "react";
import "./Header.css";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <footer>
          <p>Copyright Ⓒ {year}</p>
        </footer>
      </div>
    </>
  );
};
export default Footer;
