import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const amount = useSelector(state=>state.amount)


  return (
    <div ><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">KhanaLelo</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
         <li className="nav-item active">
          <Link className="nav-link" to="/Post">Restaurant List <span className="sr-only">(current)</span></Link>
        </li> 
        {/* <li className="nav-item">
          <Link className="nav-link" to="/Menu">Menu</Link>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link" href="/">Deals</a>
        </li> */}
        <li className="nav-item">
          <a className="nav-link " href="/">Cart </a>
        </li>
      </ul>
      <div className='total'>
        <button disabled={true} className='btn btn-primary '>SubTotal: {amount}</button>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar