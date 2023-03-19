import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import './SearchByOrderId.css'

function SearchByOrderId(props) {

    const [searchInput, setSearchInput] = useState('');
    const { setSearchById } = props

    function handleClick() {
        setSearchById(searchInput);
    }

    return (
        <div style={{width: 250, minWidth: 250}}>
            {/* <input type="text" onChange={e => setSearchInput(e.target.value)} placeholder='Customer Search'/> */}
            <TextField onChange={e => setSearchInput(e.target.value)} id="outlined-basic" label="Customer Search" variant="outlined" size="small" style={{width: 180}}/>
            {/* <button onClick={() => handleClick()} >search</button> */}
            <Button variant="contained" onClick={() => handleClick()} style={{height: 40}}><SearchIcon /></Button>
        </div>
    )
}

export default SearchByOrderId;