import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth_service'
import {logout} from '../../store/authSlice'

function LogoutButton(){
          const dispatch =useDispatch()
          const logoutHandler =() => {
                    authService.logout().then(() => {//qki logout ek promise hai tbhi .then() use kiya
                              dispatch(logout())
                    })
          }
          return(
                    <button className='inline-block px-6 py-2 duraton-200 hover:tbg-blue-200 rounded-full'
                    onClick={logoutHandler}>
                              Logout
                    </button>
          )
}

export default LogoutButton