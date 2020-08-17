import React, { useState } from "react";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import "./Chat.css";
import Message from "./Message";
import db from "./firebase";
import { useParams } from "react-router-dom";
function Chat() {
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState(null);

  React.useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );

    //Run this code once
  }, [roomId]);

  return (
    <>
      <div className="chat">
        <div className="chat__header">
          <div className="chat__headerLeft">
            <div className="chat__channelName">
              <strong>#{roomDetails?.name}</strong>
              <StarBorderOutlinedIcon />
            </div>

            <h4>Company wide announcements and work related messages</h4>
          </div>
          <div classname="chat__headerRight"></div>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map((message) => (
          <Message
            message={message.message}
            // user={user}
            userImmage={message.userImage}
          />
        ))}
      </div>
    </>
  );
}

export default Chat;
