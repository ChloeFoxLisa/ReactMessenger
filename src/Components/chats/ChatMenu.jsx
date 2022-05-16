import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import nextId from "react-id-generator";
import AddChat from "./AddChat";
import { chatListSelector } from "../../Store/Chats/selectors";

function ChatMenu({ chatId }) {

    const chats = useSelector(chatListSelector);

    const navigate = useNavigate();

    const redirectFunc = (e) => {
        navigate(e.target.id);
    }

    useEffect(() => {
        if (!Object.keys(chats).find(item => item === 'id' + chatId)) {
            navigate("");
        }
    }, [chatId])


    return (
        <div className="chats">
            <div className="chatList">
                {Object.keys(chats).map((el) => {
                    return <button className="chatButton" key={nextId()} id={el.slice(2)} onClick={redirectFunc}>{chats[el].name}</button>;
                })}
            </div>
            <AddChat />
        </div>
    )
}

export default ChatMenu;