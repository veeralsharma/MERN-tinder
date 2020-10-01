import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import "../css/ChatScreen.css"

function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      name: "Phoebe",
      image: "https://wallpapercave.com/wp/wp3744299.jpg",
      message: "sup smelly cat",
    },
    {
      name: "Phoebe",
      image: "https://wallpapercave.com/wp/wp3744299.jpg",
      message: "what up",
    },
    {
      message: "I actually need some help can you ?",
    },
    {
      name: "Phoebe",
      image: "https://wallpapercave.com/wp/wp3744299.jpg",
      message: "I wish i could but i dont want to",
    },
    {
      message: "Wow , so funny",
    },
  ]);

  return (
    <div classNam="chatScreen">
      <p className="chatScreen_timestamp">
        You matched with phoebe on 10/09/2020
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen_message">
            <Avatar
              className="chatScreen_image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen_text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_usertext">{message.message}</p>
          </div>
        )
      )}
      <form className="chatScreen_input">
        <input
          className="chatScreen_inputField"
          placeholder="Type a message ..."
          type="text"
        />
        <button className="chatScreen_inputButton">Send</button>
      </form>
    </div>
  );
}

export default ChatScreen;
