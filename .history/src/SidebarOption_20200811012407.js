import React from "react";
import "./SidebarOption.css";
function SidebarOption({ Icon, title }) {
  return <div classname="sidebarOption">{Icon && <Icon />}</div>;
}

export default SidebarOption;
