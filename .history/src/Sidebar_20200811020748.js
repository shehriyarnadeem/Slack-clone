import React from "react";
import SidebarOption from "./SidebarOption";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InputIcon from "@material-ui/icons/Input";
import DraftsIcon from "@material-ui/icons/Drafts";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import CreateIcon from "@material-ui/icons/Create";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2>Clever programmer</h2>
          <h3>
            <FiberManualRecordIcon />
            Rafeh qazi
          </h3>
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InputIcon} title="Mentioned" />
      <SidebarOption Icon={DraftsIcon} title="Saved" />
      <SidebarOption Icon={BookmarkBorderIcon} title="Threads" />
      <SidebarOption Icon={PeopleAltIcon} title="People" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <SidebarOption Icon={FileCopyIcon} title="File" />
    </div>
  );
}

export default Sidebar;
