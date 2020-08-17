import React, { useState } from "react";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import ChatInput from "./ChatInput";
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

  console.log(roomId);
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
          <div className="chat__headerRight"></div>
        </div>
        <div className="chat__messages">
          {roomMessages?.map((message) => (
            <Message
              message={message.message}
              timestamp={message.timestamp}
              user={message.username}
              userImage={message.userImage}
            />
          ))}
        </div>
      </div>
      <ChatInput channelName={roomDetails?.name} channelId={roomId} />
    </>
  );
}

export default Chat;
