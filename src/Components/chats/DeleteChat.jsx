import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteChatCationAction } from '../../Store/Chats/actions';
import { deleteAllMessages } from '../../Store/Messages/actions';


export default function DeleteChat({ chatId }) {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleDeleteChat = () => {
        navigate("");
        dispatch(deleteChatCationAction({ chatId }));
        dispatch(deleteAllMessages({ chatId }));
    }

    return (
        <>
            <svg onClick={handleDeleteChat} fill='purple' className='deleteChat' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24">
                <path d="M12.5,11.7928932 L15.1464466,9.14644661 C15.3417088,8.95118446 15.6582912,8.95118446 15.8535534,9.14644661 C16.0488155,9.34170876 16.0488155,9.65829124 15.8535534,9.85355339 L13.2071068,12.5 L15.8535534,15.1464466 C16.0488155,15.3417088 16.0488155,15.6582912 15.8535534,15.8535534 C15.6582912,16.0488155 15.3417088,16.0488155 15.1464466,15.8535534 L12.5,13.2071068 L9.85355339,15.8535534 C9.65829124,16.0488155 9.34170876,16.0488155 9.14644661,15.8535534 C8.95118446,15.6582912 8.95118446,15.3417088 9.14644661,15.1464466 L11.7928932,12.5 L9.14644661,9.85355339 C8.95118446,9.65829124 8.95118446,9.34170876 9.14644661,9.14644661 C9.34170876,8.95118446 9.65829124,8.95118446 9.85355339,9.14644661 L12.5,11.7928932 L12.5,11.7928932 Z M12.5,23 C6.70101013,23 2,18.2989899 2,12.5 C2,6.70101013 6.70101013,2 12.5,2 C18.2989899,2 23,6.70101013 23,12.5 C23,18.2989899 18.2989899,23 12.5,23 Z M12.5,22 C17.7467051,22 22,17.7467051 22,12.5 C22,7.25329488 17.7467051,3 12.5,3 C7.25329488,3 3,7.25329488 3,12.5 C3,17.7467051 7.25329488,22 12.5,22 Z" />
            </svg>
        </>
    );
}