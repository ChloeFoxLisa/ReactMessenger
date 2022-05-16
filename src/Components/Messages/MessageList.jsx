import { useSelector } from "react-redux";
import nextId from "react-id-generator";
import { userNameSelector } from "../../Store/Profile/selectors";

function MessageList({ messages }) {

    const userName = useSelector(userNameSelector);

    return (
        messages.map((el) => {
            if (el.author === userName) {
                return <div className="message" key={nextId()}>{el.author}: {el.text}<br></br></div>;
            } else {
                return <div className="answer" key={nextId()}>{el.author}: {el.text}<br></br></div>;
            }
        })
    )
}

export default MessageList;