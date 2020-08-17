import React, { useState } from "react";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
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
