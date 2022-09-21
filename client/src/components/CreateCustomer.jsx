import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateCustomer = () => {
    //Delcaring all states needed in the form
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [office, setOffice] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState()
  const [dob, setDob] = useState()
  const [doi, setDoi] = useState()
  const [price, setPrice] = useState()
  const [bank, setBank] = useState()
  const [approval, setApproval] = useState()
  const [status, setStatus] = useState()
  const [comments, setComments] = useState([])
  const [allReps, setAllReps] = useState([])
  const [repId, SetRepId] = useState()

  //variable to hanlde errors on validation
  const [errors, setErrors] = useState([])

  //I need to have all the sales reps to  assign the customer
  useEffect(()=>{
    axios.get('http://localhost:8000/api/reps')
        .then(response=>{
            console.log(response.data)
            setAllReps(response.data) 
        })
        .catch(err=>console.log(err))
  },[])



  //After submit, call e POST method to save info in database
  const handleSubmit = (e, repId) => {
    e.preventDefault()

    axios.post(`http://localhost:8000/api/customer/${repId}`, {firstName, lastName, email, office, address, phone, dob, doi, price, bank,approval, status, comments})
      .then(response=>{
        console.log(response.data)
        navigate('/')
      })
      .catch(err=>{
        console.log(err.response)
        const errorResposneDataErrors = err.response.data.errors
        const errMsgArr = []
        for (const eachKey in errorResposneDataErrors){
          errMsgArr.push(errorResposneDataErrors[eachKey].message)
        }
        setErrors(errMsgArr)
      })
  }


  const handleHome = () => {
    navigate('/')
  }


  return (
    <div>
    <h1>Add a New Customer</h1>
    {/* REGISTRATION FORM FOR NEW REP */}
    <button onClick={handleHome}>back to Dashboard</button>
    <form onSubmit={(e)=>handleSubmit(e,repId)}>
      <div>
        <label>First name:</label>
        <input type='text' name='firstName' value={firstName}  onChange={(e)=>setFirstName(e.target.value)}/>
      </div>
      <div>
        <label>Last name:</label>
        <input type='text' name='lastName' value={lastName}  onChange={(e)=>setLastName(e.target.value)}/>
      </div>
      <div>
        <label>Phone number:</label>
        <input type='number' name='phone' value={phone}  onChange={(e)=>setPhone(e.target.value)}/>
      </div>
      <div>
        <label>Email:</label>
        <input type='text' name='email' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div>
        <label>Address:</label>
        <input type='text' name='address' value={address}  onChange={(e)=>setAddress(e.target.value)}/>
      </div>
      <div>
        <label>DOB:</label>
        <input type='date' name='dob' value={dob}  onChange={(e)=>setDob(e.target.value)}/>
      </div>
      <div>
        <label>Date of installation:</label>
        <input type='date' name='doi' value={doi}  onChange={(e)=>setDoi(e.target.value)}/>
      </div>
      <div>
        <label>Office</label>
        <select type='text' name='office' value={office} onChange={(e)=>setOffice(e.target.value)}>
          <option hidden>Choose Office:</option>
          <option value='VA'>Virginia</option>
          <option value='MD'>Maryland</option>
        </select>
      </div>
      <div>
        <label>Price:</label>
        <input type='number' name='price' value={price}  onChange={(e)=>setPrice(e.target.value)}/>
      </div>
      <div>
        <label>Bank:</label>
        <input type='text' name='bank' value={bank}  onChange={(e)=>setBank(e.target.value)}/>
      </div>
      <div>
        <label>Approval:</label>
        <input type='number' name='approval' value={approval}  onChange={(e)=>setApproval(e.target.value)}/>
      </div>
      <div>
        <label>Status:</label>
        <select type='text' name='status' value={status} onChange={(e)=>setStatus(e.target.value)}>
          <option hidden>Choose status:</option>
          <option value='Sold'>Sold</option>
          <option value='Installed'>Installed</option>
          <option value='Contract signed'>Contract Signed</option>
          <option value='Verified'>Verified</option>
          <option value='Paid'>Paid</option>
        </select>
      </div>
      <div>
      <label>Representative:</label>
      <select type='text' name='rep' value={repId} onChange={(e)=>SetRepId(e.target.value)}>
        <option>Select Rep:</option>
      {
        allReps.map((eachRep,i)=>(
            <option key={i} value={eachRep._id}>{eachRep.firstName}  {eachRep.lastName}</option>
        ))
      }
      </select>
      </div>
       <div>
        <label>Comments:</label>
        <textarea name='comments' value={comments} onChange={(e)=>setComments(e.target.value)} rows='4' cols='50'>
        </textarea>
      </div>
   
      <button>Add Customer</button>
    </form>
      {/* SHOW ERRROR MESSAGE FOR VALIDATIONS */}
      {
        errors.map((eachErr,i)=>(
          <p key={i} syle={{color: 'red'}}>{eachErr}</p>
        ))
      }
  </div>
  )
}

export default CreateCustomer