import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h2>Clever programmer</h2>
        <h3>
          <FiberManualRecordIcon />
          Rafeh qazi
        </h3>
      </div>
    </div>
  );
}

export default Sidebar;
