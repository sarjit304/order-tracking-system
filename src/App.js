import './App.css';
import { useEffect, useState } from 'react';
import DisplayOrderTable from './components/DisplayOrderTable';
import SearchByOrderId from './components/SearchByOrderId';
import CreateOrder from './components/CreateOrder';
import OrderTypeDropDown from './components/OrderTypeDropDown';
import DeleteSelected from './components/DeleteSelected';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Header from './components/Header';

const ORDER_TYPES = ["Standard", "SaleOrder", "PurchaseOrder", "TransferOrder", "ReturnOrder"];
const URL = 'https://red-candidate-web.azurewebsites.net/api/Orders'
const API_KEY = 'b7b77702-b4ec-4960-b3f7-7d40e44cf5f4'

function App() {

  const [data, setData] = useState();
  const [searchById, setSearchById] = useState('');
  const [buttonClick, setButtonClick] = useState(false)
  const [userName, setUserName] = useState('John Doe');
  // console.log(data)

  useEffect(() => {
    
    fetch(URL, {
      method: 'GET',
      headers:  {
        "ApiKey": API_KEY
      }
    })
    .then(res => res.json())
    .then(data => {
      let newData = [...data];
      newData.forEach(item => item['isSelected'] = false)
      setData(newData)
    })
    .catch(console.log)
  }, [])

  return (
    <>
      <Header userName={userName} setUserName={setUserName}/>
      <hr />
      <div className='table-action-items'>
        <SearchByOrderId setSearchById={setSearchById}/>
        <Button onClick={() => setButtonClick(!buttonClick)} variant='contained' style={{minWidth: 172}}><AddIcon />CREATE ORDER</Button>
        <DeleteSelected data={data} URL={URL} API_KEY={API_KEY} setData={setData}/>
        <OrderTypeDropDown ORDER_TYPES={ORDER_TYPES} setData={setData} URL={URL} API_KEY={API_KEY}/>
      </div>
      {buttonClick ? <CreateOrder ORDER_TYPES={ORDER_TYPES} userName={userName} URL={URL} API_KEY={API_KEY} data={data} setData={setData} setButtonClick={setButtonClick}/>: null}
      <DisplayOrderTable data={data} searchById={searchById} setData={setData} URL={URL} API_KEY={API_KEY} ORDER_TYPES={ORDER_TYPES}/>
    </>
  );
}

export default App;
