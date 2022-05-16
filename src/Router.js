import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import DeleteChat from "./Components/chats/DeleteChat";
import Profile from "./Screens/Profile";
import Chats from "./Screens/Chats";
import { Home } from "./Screens/Home";
import { ROUTS } from "./Constants/Routes";


const Router = () => {
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to={ROUTS.MAIN}>Home</Link>
                </li>
                <li>
                    <Link to={ROUTS.PROFILE}>Profile</Link>
                </li>
                <li>
                    <Link to={ROUTS.CHAT}>Chats</Link>
                </li>
            </ul>
            <Routes>
                <Route exact path={ROUTS.MAIN} element={< Home />} />
                <Route exact path={ROUTS.PROFILE} element={<Profile />} />
                <Route path={ROUTS.CHAT} element={<Chats />}>
                    <Route path=":chatId" element={<Chats />} />
                </Route>
                <Route exact path="test" element={<DeleteChat />}></Route>
                <Route path="*" element={<div> 404 not found</div>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
