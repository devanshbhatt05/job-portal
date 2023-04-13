import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../actions/postAction'
import {bindActionCreators} from 'redux'
import { deductFromCart } from '../actions/types'
import Food from './Food'


const Menu = () => {

    const dispatch =useDispatch()
    const {deductFromCart,addToCart}= bindActionCreators(actionCreators,dispatch)


    return (
        <div>
            <div className="card my-2" style={{"width": "18rem"}}>
                <img src="./images/ButterMasala.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Chicken Butter Masala-Rs.150</h5>
                    {/* <Food></Food> */}
                    <button className="btn btn-primary mx-2" onClick={()=>deductFromCart(150)}>-</button>
                    Add to Cart
                    <button className="btn btn-primary mx-2" onClick={()=>addToCart(150)}>+</button>
                </div>
            </div>
            <div className="card my-2" style={{"width": "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Biryani -Rs.250</h5>
                    
                    <button className="btn btn-primary mx-2"  onClick={()=>deductFromCart(250)}>-</button>
                    Add to Cart
                    <button className="btn btn-primary mx-2" onClick={()=>addToCart(250)}>+</button>
                </div>
            </div>
            <div className="card my-2" style={{"width": "18rem"}}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Chhole Bhature-Rs.100</h5>
                    <button className="btn btn-primary mx-2"  onClick={()=>deductFromCart(100)}>-</button>
                    Add to Cart
                    <button className="btn btn-primary mx-2" onClick={()=>addToCart(100)}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Menu