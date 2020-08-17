import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
function Chat() {
  const { roomId } = useParams();

  return (
    <div className="chat">
      <div className="chat__header">
        <div classname="chat__headerLeft">
          <div className="chat__channelName">
            <h3>#general</h3>
          </div>

          <h4>Company wide announcements and work related messages</h4>
        </div>
        <div classname="chat__headerRight"></div>
      </div>
    </div>
  );
}

export default Chat;
