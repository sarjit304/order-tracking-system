import { useState } from 'react';
import './DisplayOrderTable.css'
import EditableRow from './EditableRow';
import ReadOnlyRow from './ReadOnlyRow';
import Checkbox from '@mui/material/Checkbox';

function DisplayOrderTable(props) {

    const { data, searchById, setData, URL, API_KEY, ORDER_TYPES } = props;

    const [orderToEditId, setOrderToEditId] = useState('');

    function handleSelectionChange(orderId) {
      let newData = [...data];
      let index = newData.findIndex(item => item.orderId === orderId)
      newData[index].isSelected = !newData[index].isSelected;
      setData(newData);
    }

    return (
        <table className='order-table'>
        <thead>
          <tr>
            <th style={{width: 42}}><Checkbox style={{ color: 'red'}} disabled/></th>
            <th style={{width: 280}}>Order ID</th>
            <th style={{width: 170}}>Creation Date</th>
            <th style={{width: 145}} className='editable'>Created By</th>
            <th style={{width: 200}}className='editable'>Order Type</th>
            <th className='editable'>Customer</th>
            <th style={{ width: 203}}></th>
          </tr>
        </thead>
        <tbody>
          {data ? 
            data
            .filter(item => item.orderId.toLowerCase().includes(searchById.toLowerCase()))
            .map(item => {
                return orderToEditId === item.orderId ?
                  <EditableRow key={item.orderId} item={item} handleSelectionChange={handleSelectionChange} setOrderToEditId={setOrderToEditId} URL={URL} API_KEY={API_KEY} setData={setData} ORDER_TYPES={ORDER_TYPES}/>:
                  <ReadOnlyRow key={item.orderId} item={item} handleSelectionChange={handleSelectionChange} setOrderToEditId={setOrderToEditId} />
                })
            : null}
        </tbody>
      </table>
    )
}

export default DisplayOrderTable;