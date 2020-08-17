import React, { useState } from "react";
import db from "./firebase";
import "./ChatInput.css";
import firebase from "firebase";
import { useStatevalue } from "./StateProvider";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStatevalue();
  console.log(channelId);
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages", {
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp,
        user: user.displayName,
        userImage: user.photoURL,
      });
    }
  };
  return (
    <div className="chatInput">
      <form>
        <input
          value={input}
          placeholder={`Message #${channelName}`}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
