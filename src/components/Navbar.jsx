import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-blue-200 px-4 py-2'>
      <div className='container mx-auto'>
        <ul className='flex items-center justify-between'>
          <li>
            <Link to="/" className='text-blue-900 underline hover:text-blue-700 font-semibold'>SGPA Calc</Link>
          </li>
          <li>
            <Link to="/percent" className='text-blue-900 underline hover:text-blue-700 font-semibold'>Percentage Convert</Link>
          </li>
          <li>
            <Link to="/cgpa" className='text-blue-900 underline hover:text-blue-700 font-semibold'>CGPA Calc</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;