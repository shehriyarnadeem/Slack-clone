import React from "react";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import "./Chat.css";
import db from "./firebase";
import { useParams } from "react-router-dom";
function Chat() {
  const { roomId } = useParams();

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
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <div className="chat__channelName">
            <h3>#general</h3>
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
