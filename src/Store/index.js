import {
    configureStore
} from "@reduxjs/toolkit";
import {
    applyMiddleware,
    combineReducers,
    compose
} from "redux";
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer
} from 'redux-persist';
import {
    chatsReducer
} from "./Chats/reducer";
import {
    messagesReducer
} from "./Messages/reducer";
import {
    profileReducer
} from "./Profile/reducer";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}


const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
        reducer: persistedReducer
    },
    composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);