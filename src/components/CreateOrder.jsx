import './CreateOrder.css'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';

function CreateOrder(props) {

    const { ORDER_TYPES, userName, URL, API_KEY, data, setData, setButtonClick }= props
    const [orderType, setOrderType] = useState('Standard')

    function handleSubmit(e) {
        e.preventDefault();

        // for form input
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        formJson["createdByUserName"] = userName;
        // console.log(formJson);

        if (formJson['orderType'] === '' || formJson['customerName'] === '' || formJson['createdByUserName'] === '') {
            alert('All fields required');
        } else {

            fetch(URL, {
                method: "POST",
                headers: {
                    "ApiKey": API_KEY,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formJson)
            })
            .then(res => res.json())
            .then(resData => {
                let newData = [...data];
                resData["isSelected"] = false;
                newData.push(resData);
                setData(newData);
            })
            .then(alert('New Order Created.'))
            .catch(console.log)
        }
        setButtonClick(false);
    }

    return <form onSubmit={handleSubmit} className='create-order-form'>
        {/* <label>
            Order Type: 
            <select name="orderType" defaultValue='Standard'>
                {ORDER_TYPES.map(order => <option value={order} key={order}>{order}</option>)}
            </select>
        </label> */}
        
        <FormControl >
            <InputLabel id="demo-simple-select-label">Order Type</InputLabel>
            <Select
                name='orderType'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={orderType}
                label="orderType"
                size="small"
                onChange={(e) => setOrderType(e.target.value)}
                style={{minWidth: 200}}
            >
                {ORDER_TYPES.map(type => <MenuItem value={type} key={type}>{type}</MenuItem>)}
            </Select>
        </FormControl>

        {/* <label>
            Customer Name:
            <input name="customerName" type="text" placeholder="Customer Name" required/>
        </label> */}
        <TextField name='customerName' label='Customer Name' variant="outlined" size="small"/>

        {/* <button type="submit">Create</button> */}
        <Button type='submit' variant="contained">
            Create
        </Button>

    </form>
}

export default CreateOrder;