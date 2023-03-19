import { useState } from "react";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function EditableRow(props) {

    const { item, handleSelectionChange, setOrderToEditId, URL, API_KEY, setData, ORDER_TYPES } = props;

    const propCreatedByUserName = item.createdByUserName;
    const propOrderType = item.orderType;
    const propCustomerName = item.customerName;

    const [newCreatedByUserName, setNewCreatedByUserName] = useState(propCreatedByUserName);
    const [newCustomerName, setNewCustomerName] = useState(propCustomerName);
    const [newOrderType, setNewOrderType] = useState(propOrderType);

    function editDataOnServer(order) {
        let newData = {
            orderId: order.orderId,
            createdByUserName: newCreatedByUserName,
            customerName: newCustomerName,
            orderType: newOrderType
        }

        fetch(URL, {
            method: "PUT",
            headers: {
                'ApiKey': API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(alert('Order updated'))
        .then(
            fetch(URL, {
                method: "GET",
                headers: {
                    'ApiKey': API_KEY
                }
            })
            .then(res => res.json())
            .then(data => {
                let newData = [...data];
                newData.forEach(item => item['isSelected'] = false);
                setData(newData);
            })
            .catch(console.log)
        )
        .then(setOrderToEditId(''))
        .catch(console.log)
    }

    return <tr id={item.orderId}>
    <td>
        <Checkbox style={{ color: 'red'}} onChange={() => handleSelectionChange(item.orderId)}/>
    </td>
    <td>{item.orderId}</td>
    <td>{item.createdDate}</td>
    <td>
        {/* <input type='text' value={newCreatedByUserName} onChange={(e) => setNewCreatedByUserName(e.target.value)}/> */}
        <TextField 
            value={newCreatedByUserName} 
            onChange={(e) => setNewCreatedByUserName(e.target.value)} 
            sx={{width: 145}} 
            variant="outlined" 
            size="small"
            label="User"
        />
    </td>
    <td>
        {/* <input type='text' value={newOrderType} onChange={(e) => setNewOrderType(e.target.value)}/> */}
        <FormControl >
            <InputLabel id="demo-simple-select-label">Order Type</InputLabel>
            <Select
                name='orderType'
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={newOrderType}
                label="orderType"
                size="small"
                onChange={(e) => setNewOrderType(e.target.value)}
                style={{minWidth: 200}}
            >
                {ORDER_TYPES.map(type => <MenuItem value={type} key={type}>{type}</MenuItem>)}
            </Select>
        </FormControl>
    </td>
    <td>
        {/* <input type='text' value={newCustomerName} onChange={(e) => setNewCustomerName(e.target.value)}/> */}
        <TextField 
            value={newCustomerName} 
            onChange={(e) => setNewCustomerName(e.target.value)} 
            sx={{width: 145}} 
            variant="outlined" 
            size="small"
            label="Customer"
        />
    </td>
    <td style={{display: "flex", gap: 10, flexWrap: 'wrap'}}>
        <Button variant="contained" onClick={() => setOrderToEditId('')} size='small'>Cancel</Button>
        <Button variant="contained" onClick={() => editDataOnServer(item)} size='small'>Update</Button>
    </td>
    </tr>
}

export default EditableRow;