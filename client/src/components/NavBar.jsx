import React from 'react'
import { Button } from '@mui/material'
import logo from '../images/logo-no-background.png'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate();

    const handleLogout = () =>{
        navigate('/login')
    }

  return (
 

    <div  className='nav-bar'>
        <img style={{margin: 3, width: 300}} src={logo}></img>
        <Button sx={{heigth:300}} onClick={handleLogout} variant="contained" color="info">Log out</Button>
      </div>
 
  )
}

export default NavBar