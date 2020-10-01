import React from 'react'
import "../css/Chats.css"
import Chat from "./Chat"

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name="Phoebe"
                message="I wanna help but I dont want to"
                timestamp="40 seconds ago"
                profilePic="https://wallpapercave.com/wp/wp3744299.jpg"
            />
            <Chat 
                name="Monica"
                message="did you moved the couch ? "
                timestamp="An hour ago"
                profilePic="https://i.insider.com/5c8279ebeb3ce821ef1247a2?width=1100&format=jpeg&auto=webp"
            />
            <Chat 
                name="Rachel"
                message=" we were not on a break"
                timestamp="15 minutes ago"
                profilePic="https://tvline.com/wp-content/uploads/2019/06/friends-rachel.jpg?w=620"
            />
        </div>
    )
}

export default Chats
