import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';

function ReadOnlyRow(props) {

    const { item, handleSelectionChange, setOrderToEditId } = props;

    return <tr id={item.orderId}>
    <td>
        {/* <input type="checkbox" checked={item.isSelected} onChange={() => handleSelectionChange(item.orderId)}/> */}
        <Checkbox style={{ color: 'red'}} onChange={() => handleSelectionChange(item.orderId)}/>
    </td>
    <td>{item.orderId}</td>
    <td>{item.createdDate}</td>
    <td>{item.createdByUserName}</td>
    <td>{item.orderType}</td>
    <td>{item.customerName}</td>
    <td><button onClick={() => setOrderToEditId(item.orderId)} style={{border: 'none', backgroundColor: 'white', cursor: 'pointer'}}><EditIcon /></button></td>
    </tr>
}

export default ReadOnlyRow