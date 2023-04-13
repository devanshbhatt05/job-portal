import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const total= useSelector((state)=>state.amount)

    const onClick=(e)=>{
        e.preventDefault()
        if (total !== 0){
            alert('Your order has been placed')
        }else{
            alert('Your cart is empty')
        }
    }

    
  return (
    <div >
        <h1>The Total amount to be Paid is {total}</h1>
        <button className="btn btn-primary mx-2 my-3" onClick={onClick} >Place Order</button>
    </div>
  )
}

export default Cart