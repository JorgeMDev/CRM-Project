import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const CreateRep = () => {

  //Delcaring all states needed in the form
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [office, setOffice] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState()
  const [dob, setDob] = useState()
  const [gender, setGender] = useState('')
  const [maritalStatus, setMaritalStatus] = useState()
  const [referral, setReferral] = useState()
  const [education, setEducation] = useState()
  const [ethnicity, setEthnicity] = useState()
  const [isAdmin, setIsAdmin] = useState(false)

  //variable to hanlde errors on validation
  const [errors, setErrors] = useState([])

  

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:8000/api/rep', {firstName, lastName, email, office, address, phone, dob, gender, maritalStatus, referral,education, ethnicity, isAdmin})
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

  const handleCheck = (e) => {
    setIsAdmin(!isAdmin)
  }

  const handleHome = () => {
    navigate('/')
  }

  return (
    <div>
      <h1>Add a New Representative</h1>
      {/* REGISTRATION FORM FOR NEW REP */}
      <button onClick={handleHome}>back to Dashboard</button>
      <form onSubmit={handleSubmit}>
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
          <label>Gender:</label>
          <select type='text' name='gender' value={gender} onChange={(e)=>setGender(e.target.value)}>
            <option hidden>Choose gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Other'>Other</option>
          </select>
        </div>
        <div>
        <label>Marital Status:</label>
          <select type='text' name='maritalstatus' value={maritalStatus} onChange={(e)=>setMaritalStatus(e.target.value)}>
            <option hidden>Choose marital status:</option>
            <option value='single'>Single</option>
            <option value='married'>Married</option>
            <option value='divorced'>Divorced</option>
            <option value='widowed'>Widowed</option>
          </select>
        </div>
        <div>
          <label>Ethnicity:</label>
          <select type='text' name='ethnicity' value={ethnicity} onChange={(e)=>setEthnicity(e.target.value)}>
            <option hidden>Choose:</option>
            <option value='white'>White</option>
            <option value='africanameerican'>African American</option>
            <option value='asian'>Asian</option>
            <option value='hispanic'>Hispanic</option>
          </select>
        </div>
        {/* UNCOMMENT THIS WHEN LOGIN AUTH IS IMPLEMENTED<div>
          <label>Password:</label>
          <input type='text' name='password' value={password}  onChange={(e)=>setPassword(e.target.value)}/>
        </div> */}
         <div>
          <label>Referral:</label>
          <input type='text' name='referral' value={referral}  onChange={(e)=>setReferral(e.target.value)}/>
        </div>
        <div>
        <label>Education:</label>
          <select type='text' name='education' value={education} onChange={(e)=>setEducation(e.target.value)}>
            <option hidden>Choose education:</option>
            <option value='highschool'>High School</option>
            <option value='college'>College</option>
            <option value='bachelor'>Bachelor's Degree</option>
            <option value='master'>Master's Degree</option>
            <option value='doctorate'>Doctorate</option>
          </select>
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
          <label>Admin?</label>
          <input type='checkbox' name='isAdmin' value={isAdmin} onChange={handleCheck}/>
        </div>
        <button>Add Representative</button>
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

export default CreateRep