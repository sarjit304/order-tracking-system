import { useEffect, useState } from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function OrderTypeDropDown(props) {

    const { ORDER_TYPES, URL, API_KEY, setData } = props;

    const [orderType, setOrderType] = useState('');

    function fetchAndUpdateData(url) {
        fetch(url, {
            method: "GET",
            headers: {
                "ApiKey": API_KEY
            }
        })
        .then(res => res.json())
        .then(data => {
            let newData = [...data];
            newData.forEach(item => item['isSelected'] = false);
            setData(newData);
        })
        .catch(console.log)
    }

    useEffect(() => {
        if (orderType === "") {

        } else if (orderType === "All") {
            fetchAndUpdateData(URL)
        } else {
            fetchAndUpdateData(URL + '/ByType?orderType=' + orderType)
        }

        // eslint-disable-next-line
    }, [orderType])


    return <div style={{minWidth: 200}}>
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Order Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={orderType}
                label="orderType"
                onChange={(e) => setOrderType(e.target.value)}
                size="small"
            >
                <MenuItem value={'All'}>All</MenuItem>
                {ORDER_TYPES.map(type => <MenuItem value={type} key={type}>{type}</MenuItem>)}
            </Select>
        </FormControl>
    </div>
}

export default OrderTypeDropDown;