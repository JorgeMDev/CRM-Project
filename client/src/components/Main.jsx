import axios from 'axios'
import React, {useState, useEffect} from 'react'
import AdminTable from './AdminTable'
import Histogram from './Histogram'
import NavBar from './NavBar'


const Main = () => {
  const [customers, setCustomers] = useState([])
  const [repsWithCustomer, setRepWithCustomer] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/api/customers/all')
      .then(response=>{
        console.log(response.data)
        setCustomers(response.data)
      })
      .catch(err=>console.log(err))

      axios.get('http://localhost:8000/api/rep/all/customers')
      .then(response=>{
        console.log(response.data)
        setRepWithCustomer(response.data)
      })
      .catch(err=>console.log(err))

  },[])


  //update list after delete
  const filterList = (deleteId) =>{
    const updatedList = customers.filter((eachCust)=>deleteId!==eachCust._id)
    setCustomers(updatedList)
  }




  return (
    <div>
      <NavBar/>
      <div style={{marginLeft: 150, marginRight: 150}}>
      <AdminTable customers={customers} onDelete={filterList}/>
      <Histogram repsWithCustomer={repsWithCustomer} customers={customers}/>
      </div>
    </div>
  )
}

export default Main