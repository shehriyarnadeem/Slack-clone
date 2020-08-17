import React, { useState } from "react";
import db from "./firebase";
import "./ChatInput.css";
import firebase from "firebase";
import { useStatevalue } from "./StateProvider";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useStatevalue();
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
      db.collection("rooms").doc(channelId).collection({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp,
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
