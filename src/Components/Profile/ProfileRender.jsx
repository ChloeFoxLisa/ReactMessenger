import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserNameAction, toggleShowName } from "../../Store/Profile/actions";
import { showUserNameSelector, userNameSelector } from "../../Store/Profile/selectors.js";


export const ProfileRender = () => {
    const [name, setName] = useState("");

    const userName = useSelector(userNameSelector);
    const showUserName = useSelector(showUserNameSelector);

    const dispatch = useDispatch();

    const changeName = useCallback(() => {
        dispatch(changeUserNameAction({ name }));
    }, [dispatch, name]);

    const setShowName = useCallback(() => {
        dispatch(toggleShowName())
    })

    const handleUserNameChange = (e) => {
        setName(e.target.value);
    };

    return (
        <div className="profile">
            <h4>Profile</h4>
            <button onClick={changeName}>
                Click here!
            </button>
            <input type="checkbox" onClick={setShowName} checked={showUserName} />
            <input type="text" name={name} onChange={handleUserNameChange}></input>
            {showUserName && <div>{userName}</div>}
        </div>
    );
}