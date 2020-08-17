import React from "react";

function ChatInput({ channelName, channelId }) {
  const sendMessage = (e) => {
    e.preventDefault();
  };
  return (
    <div className="chatInput">
      <form>
        <input placeholder={`Message #${channelName}`} />
        <Button type="submit" onClick={sendMessage} />
      </form>
    </div>
  );
}

export default ChatInput;
