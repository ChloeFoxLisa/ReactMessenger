import { CHANGE_USER_NAME_ACTION, TOGGLE_SHOW_NAME } from "./constants.js"

const initialState = {
    userName: "Fox",
    showName: true,
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_SHOW_NAME: {
            return {
                ...state,
                showName: !state.showName,
            };
        }
        case CHANGE_USER_NAME_ACTION: {
            return{
                ...state,
                userName: action.payload.name,
            };
        }
        default:
            return state;
    }
}