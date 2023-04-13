import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className='container1'>
            <h1 className='first'>Welcome to Our Website</h1>
            <div className='second'>
                <h3 >Here You can Order Your Delicious Food</h3>
                <h3 >From Your Favourtie Restaurants</h3>
            </div>
            <div>
                <Link to='/Post'><button type="button" className="btn btn-primary size">Show Restaurants</button></Link>
            </div>
        </div>
    )
}
export default Home