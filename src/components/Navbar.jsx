import React from 'react'
import {Link} from 'react-router-dom'

function    Navbar() {
  return (
    <nav className="bg-blue-400 h-20 navbar flex">
      
      <Link to={"/compras"} className='font-bold p-2 block rounded-lg w-30 m-4'>Compras</Link>
      <Link to={"/inventario"} className='font-bold p-2 block ml-5 rounded-lg w-30 m-4'>Inventario</Link>
      <Link to={"/produccion"} className='font-bold p-2 block ml-5 rounded-lg w-30 m-4'>Produccion</Link>
    </nav>
  )
}

export default Navbar