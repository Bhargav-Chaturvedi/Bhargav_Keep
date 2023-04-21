import React from "react";
import "./Header.css";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";

const Header = () => {
  return (
    <>
      <div className="header">
        <MenuBookRoundedIcon
          style={{ height: "50px", width: "40px", display: "inline-block" }}
        />
        <h1 style={{ display: "inline-block" }}>Bhargav Keep </h1>
      </div>
    </>
  );
};
export default Header;
