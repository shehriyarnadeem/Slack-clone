import React from "react";

function Message({ message, timestamp, user, userImage }) {
  return (
    <div classname="message">
      <img src={userImage} alt="" />
      <div className="message__info">
        <h4>{user} timestamp...</h4>
      </div>
    </div>
  );
}

export default Message;
