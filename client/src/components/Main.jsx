import axios from 'axios'
import React, {useState, useEffect} from 'react'
import AdminTable from './AdminTable'

const Main = () => {
  const [customers, setCustomers] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/api/customers/all')
      .then(response=>{
        console.log(response.data)
        setCustomers(response.data)
      })
      .catch(err=>console.log(err))
  },[])
  //update list after delete
  const filterList = (deleteId) =>{
    const updatedList = customers.filter((eachCust)=>deleteId!=eachCust._id)
    setCustomers(updatedList)
  }




  return (
    <div>
      <AdminTable customers={customers} onDelete={filterList}/>
    </div>
  )
}

export default Main