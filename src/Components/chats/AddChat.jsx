import { useState } from 'react';
import { useDispatch } from 'react-redux';
import nextId from "react-id-generator";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { addChatCationAction } from '../../Store/Chats/actions';
import { addMessageAction } from '../../Store/Messages/actions';

export default function AddChat() {
    const [open, setOpen] = useState(false);
    const [newChatName, setNewChatName] = useState();

    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleAddChat = () => {
        const id = nextId();
        const message = { author: newChatName, text: "My first message!" }
        dispatch(addChatCationAction({ chatId: id, name: newChatName }));
        dispatch(addMessageAction({ chatId: id, message: message }))
        setNewChatName('');
        setOpen(false);
    }

    const handleClose = () => {
    };

    const handleUserNameChange = (e) => {
        setNewChatName(e.target.value);
    };

    return (
        <div className='addChat'>
            <Button color='inherit' variant="outlined" onClick={handleClickOpen}>
                Добавить чат
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Добавление нового чата</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Введите имя получателя
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Имя"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={handleUserNameChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button onClick={handleAddChat}>Добавить</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}