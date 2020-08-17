import React, { useState, useEffect } from "react";
import SidebarOption from "./SidebarOption";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InputIcon from "@material-ui/icons/Input";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import AppsIcon from "@material-ui/icons/Apps";
import CreateIcon from "@material-ui/icons/Create";
import db from "./firebase";
import "./Sidebar.css";
function Sidebar() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,

        }))
      );
    });
    //Run this code once
  }, []);

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

      {/* Connect to db and list all the channels  */}
      {/* SidebarOption.... */}
      {channels.map(channel => (
        <SidebarOption title={channel.name} id={channel.id}
      ))}
    </div>
  );
}

export default Sidebar;
