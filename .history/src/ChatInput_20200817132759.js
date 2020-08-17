import React from "react";

function ChatInput() {
  const sendMessage = (e) => {
    e.preventDefault();
  };
  return (
    <div className="chatInput">
      <form>
        <input />
        <Button type="submit" onClick={sendMessage} />
      </form>
    </div>
  );
}

export default ChatInput;
