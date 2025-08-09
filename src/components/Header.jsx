import React from 'react';
import rakesh from '../assets/rakesh.png'

const Header = () => {
  return (
    <div className='bg-blue-500 w-[100%] header'>
        <img src={rakesh} alt="" className='w-[10px] h-[10px]'/>
    </div>
  )
}

export default Header