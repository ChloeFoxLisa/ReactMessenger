import React from 'react';
import ChatMenu from './ChatMenu';
import ChatText from './ChatText';

function ChatsRender({ chatId }) {

    return (
        <div className="App">
            <header className="App-header">
                <div className="messenger">
                    <ChatMenu chatId={chatId} />
                    <ChatText pageId={chatId} />
                </div>
            </header>
        </div>
    );
}

export default ChatsRender;