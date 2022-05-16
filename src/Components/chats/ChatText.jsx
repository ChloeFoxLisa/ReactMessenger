import React, { useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { userNameSelector } from "../../Store/Profile/selectors";
import { messageListSelector } from "../../Store/Messages/selectors";
import { addMessageActionWithThunk } from "../../Store/Messages/actions";
import { chatListSelector } from "../../Store/Chats/selectors";
import MessageList from '../Messages/MessageList';
import DeleteChat from "./DeleteChat";


function ChatText({ pageId }) {

    const [text, setText] = useState('');
    const [chatId, setChatId] = useState('id' + pageId);

    const messageList = useSelector(messageListSelector);
    const userName = useSelector(userNameSelector);
    const interlocutor = useSelector(chatListSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        setChatId('id' + pageId);
    }, [pageId])

    const ref = useRef(null);

    useEffect(() => {
        ref.current?.focus();
    });

    const addMessage = () => {
        const message = { author: userName, text: text };
        const author = interlocutor[chatId].name;
        const answerMessage = { author: author, text: "One more message" };
        dispatch(addMessageActionWithThunk(chatId, userName, message, answerMessage))
        setText('');
    };

    const handleChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);


    if (!messageList[chatId]) {
        return (
            <div>
                <div className="chat">
                    <h1>Выберите чат</h1>
                </div>
                <div className="send-message">
                </div>
            </div>
        )
    } else {
        return (
            <div className="chatText">
                <DeleteChat chatId={chatId} />
                <div className="chat">
                    <MessageList messages={messageList[chatId]} />
                </div>
                <div className="send-message">
                    <div className="input-author">{userName}</div>
                    <TextField className="input-text" autoFocus inputRef={ref} value={text} onChange={handleChangeText} id="standard-basic" label="Text" variant="standard" />
                    <Button onClick={addMessage} variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </div>
            </div>
        )
    }
}

export default ChatText;