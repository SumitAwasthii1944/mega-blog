import React from 'react'
import logo from '../assets/logo.webp'
function Logo({width='100px'}){
          return(
                    <div>
                              <img src={logo} alt="" 
                              style={{width: width}} className='w-10 rounded-full'/>
                    </div>
          )
}

export default Logo