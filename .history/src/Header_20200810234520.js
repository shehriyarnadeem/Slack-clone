import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar className="header__avatar" alt=""
        {/* Avatars for logged in user */}
        {/* Time Icon */}
      </div>
      <div className="header__search">
        {/* Search icon*/}
        {/* Input*/}
      </div>
      <div className="header__right">{/* help icon */}</div>
    </div>
  );
}

export default Header;
