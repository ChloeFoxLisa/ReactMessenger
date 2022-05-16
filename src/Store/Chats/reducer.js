import { ADD_CHAT_CATION_ACTION, DELETE_CHAT_CATION_ACTION } from './constants.js';

const initialState = {
    chatsList: {
                id1: {name: "Соня"}, 
                id2: {name: "Катя"}, 
                id3: {name: "Оля"},
                id4: {name: "Вова"},
                id5: {name: "Бек"},
    },
};

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT_CATION_ACTION: {
            return {
                ...state,
                chatsList: {
                    ...state.chatsList,
                    [action.payload.chatId]: {name: action.payload.name}
                }
            };
        }
        case DELETE_CHAT_CATION_ACTION: {
            const newChatsListEntries = Object.entries(state.chatsList).filter(([key, value]) => key !== action.payload.chatId);
            const newChatsList = Object.fromEntries(newChatsListEntries);
            
            return {
                ...state,
                chatsList: {
                    ...newChatsList,
                }
            }
        }
        default:
            return state;
    }
}