import { ADD_MESSAGE_ACTION, DELETE_ALL_MESSAGES } from './constants.js';


export const addMessageAction = (payload) => ({
    type: ADD_MESSAGE_ACTION,
    payload,
});

export const deleteAllMessages = (payload) => ({
    type: DELETE_ALL_MESSAGES,
    payload,
})

export const addMessageActionWithThunk = (chatId, userName, message, answerMessage) => (dispatch, getState) => {
    dispatch(addMessageAction({ chatId, message }));
    if (message.author === userName) {
        setTimeout(() => {dispatch(addMessageAction({ chatId, message: answerMessage }));}, 2000);
    }
}

