import React, { useState } from "react";
import db from "./firebase";
import "./ChatInput.css";
import { useStatevalue } from "./StateProvider";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId) {
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
