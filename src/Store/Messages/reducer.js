import { ADD_MESSAGE_ACTION, DELETE_ALL_MESSAGES } from "./constants.js"

const initialState = {
    messageList: {
        id1: [{ author: "Соня", text: "First Message"}],
        id2: [{ author: "Катя", text: "First Message Here Too!"}],
        id3: [{ author: "Оля", text: "First Message"}],
        id4: [{ author: "Вова", text: "First Message Here Too!"}],
        id5: [{ author: "Бек", text: "First Message" }]
    }
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_ACTION: {
            const currentList = state.messageList[action.payload.chatId] || []; 
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.payload.chatId]: [...currentList, action.payload.message],
                }
            };
        }
        case DELETE_ALL_MESSAGES: {
            const newMessageListEntries = Object.entries(state.messageList).filter(([key, value]) => key !== action.payload.chatId);
            const newMessageList = Object.fromEntries(newMessageListEntries);
            
            return {
                ...state,
                messageList: {
                    ...newMessageList,
                }
            }
        }
        default:
            return state;
    }
}