import React from "react";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Clever </h2>
          <h3>
            <FiberManualRecordIcon />
            Rafeh qazi
          </h3>
        </div>
        <CreateIcon />
      </div>
    </div>
  );
}

export default Sidebar;
