import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

function DeleteSelected(props) {

    const { data, setData, URL, API_KEY } = props;

    function deleteSelected() {
        let selected = data.filter(item => item.isSelected).map(item => item.orderId)
        // console.log(selected)

        fetch(URL+"/Delete", {
            method: "POST",
            headers: {
                "ApiKey": API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(selected)
        })
        .then(selected.length > 1? alert("Orders Deleted"): alert("Order Deleted"))
        .then(fetch(URL, {
            method: "GET",
            headers: {
                "ApiKey": API_KEY,
            }
            })
            .then(res => res.json())
            .then(data => {
                let newData = [...data];
                newData.forEach(item => item["isSelected"] = false);
                setData(newData)
            })
            .catch(console.log))
        .catch(console.log);
    }

    // return <button onClick={() => deleteSelected()}>Delete Selected</button>
    return <Button variant='contained' onClick={() => deleteSelected()} style={{minWidth: 195}}>
        <DeleteIcon />DELETE SELECTED
    </Button>
}

export default DeleteSelected;