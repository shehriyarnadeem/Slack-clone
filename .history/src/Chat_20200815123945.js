import React, { useState } from "react";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import "./Chat.css";
import db from "./firebase";
import { useParams } from "react-router-dom";
function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);

  React.useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => console.log(snapshot.data()));
    }
    //Run this code once
  }, [roomId]);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <div className="chat__channelName">
            <h3>{roomDetails.name}</h3>
            <StarBorderOutlinedIcon />
          </div>

          <h4>Company wide announcements and work related messages</h4>
        </div>
        <div classname="chat__headerRight"></div>
      </div>
    </div>
  );
}

export default Chat;
