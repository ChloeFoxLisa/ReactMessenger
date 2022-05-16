import { TOGGLE_SHOW_NAME, CHANGE_USER_NAME_ACTION } from './constants.js';

export const toggleShowName = (payload) => ({
    type: TOGGLE_SHOW_NAME,
    payload,
});

export const changeUserNameAction = (payload) => ({
    type: CHANGE_USER_NAME_ACTION,
    payload,
});