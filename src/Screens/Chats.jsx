import React from "react";
import { useParams } from "react-router-dom";
import ChatsRender from "../Components/chats/ChatsRender";

function Chats() {
    const { chatId } = useParams();
    
    return (
        <ChatsRender chatId={chatId} />
    )
}

export default Chats;