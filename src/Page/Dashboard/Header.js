import React from 'react'

const Header = ({setIsAdding}) => {
  return (
    <header >
        <h1 >Employee Managment System</h1>
        <div>
            <button className='round-button' onClick={() => setIsAdding(true)}>ADD Button</button>
        </div>
    </header>
  )
}

export default Header