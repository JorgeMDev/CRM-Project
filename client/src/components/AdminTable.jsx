import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AdminTable = (props) => {

  const navigate = useNavigate()

  const handleDelete = (deleteId) => {
    axios.delete(`http://localhost:8000/api/customer/${deleteId}`)
      .then(response=>{
        props.onDelete(deleteId)
      })
      .catch(err=>console.log(err))
  }

  const handleNewCustomer = () => {
    navigate('/customer/new')
  }

  const handleNewRep = () => {
    navigate('/rep/new')
  }

  const handleRepList = () => {
    navigate('/all/reps')
  }

  return (
   <div>
    <div>
      <button onClick={handleNewCustomer}>Add New Customer</button>   <button onClick={handleNewRep}>Add New Rep</button>  <button onClick={handleRepList}>List of Reps</button>
    </div>
   <table>
    <thead>
      <tr>
        <th>Customer name</th>
        <th>Address</th>
        <th>Phone</th>
        <th>DOI</th>
        <th>Bank</th>
        <th>Approval</th>
        <th>Office</th>
        <th>Rep</th>
        <th>Status</th>
        <th>Actions</th>
        <th>Comments</th>
        <th>Updated at</th>
      </tr>
    </thead>
    <tbody>
      {
        props.customers.map((eachCust, i)=>{
          return (
            <tr key={i}>
              <td><Link to={`customer/${eachCust._id}`}>{eachCust.firstName} {eachCust.lastName}</Link></td>
              <td>{eachCust.address}</td>
              <td>{eachCust.phone}</td>
              <td>{eachCust.doi}</td>
              <td>{eachCust.bank}</td>
              <td>{eachCust.approval}</td>
              <td>{eachCust.office}</td>
              <td>{eachCust.rep.firstName} {eachCust.rep.lastName}</td>
              <td>{eachCust.status}</td>
              <td><button onClick={()=>handleDelete(eachCust._id)}>delete</button></td>
              <td>{eachCust.comments}</td>
              <td>{eachCust.updatedAt}</td>
            </tr>
          )
        })
      }
    </tbody>
   </table>
   </div> 
  )
}

export default AdminTable