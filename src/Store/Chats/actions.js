import { ADD_CHAT_CATION_ACTION, DELETE_CHAT_CATION_ACTION } from './constants.js';

export const addChatCationAction = (payload) => ({
    type: ADD_CHAT_CATION_ACTION,
    payload,
});

export const deleteChatCationAction = (payload) => ({
    type: DELETE_CHAT_CATION_ACTION,
    payload,
});