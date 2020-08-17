import React from "react";
import "./SidebarOption.css";
function SidebarOption({ Icon, title }) {
  return (
    <div classname="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3>
          # <span>{title}</span>
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
