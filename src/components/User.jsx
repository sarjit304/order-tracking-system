import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import './User.css'


function User(props) {

    const { userName, setUserName } = props;
    const [userInput, setUserInput] = useState('')
    const [changeNameClicked, setChangeNameClicked] = useState(false);

    function handleSubmit() {
        if (userInput === "") {
            alert('Invalid Input');
        }
        else {
            setUserName(userInput);
        }
        setChangeNameClicked(false);
    }

    // return <AccountCircleIcon fontSize='large'/>
    return <div className="dropdown">
        <button className="dropbtn"><AccountCircleIcon fontSize='large'/></button>
        <div className="dropdown-content">
            {changeNameClicked? 
                <>
                    <AccountCircleIcon fontSize='large'/>
                    <TextField onChange={(e) => setUserInput(e.target.value)} label="Enter new name" variant="outlined" size="small"/>
                    <Button onClick={() => handleSubmit()}>Update username</Button>
                </>                :
                <>
                    <AccountCircleIcon fontSize='large'/>
                    <br/>
                    <strong>{userName}</strong>
                    <br/>
                    <br/>
                    <Button onClick={() => setChangeNameClicked(true)}>Change username</Button>
                </>
            }
        </div>
    </div>
}

export default User;