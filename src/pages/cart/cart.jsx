import React, { useContext, } from 'react'
import { PRODUCTS } from '../../products'
import { Context } from '../../components/context'
import {CartItem} from './cart-item'
import { useNavigate } from 'react-router-dom'


export const Cart = () => {
  const {cartItems, totalCartAmount} = useContext(Context)
  const totalAmount = totalCartAmount()
  const navigate = useNavigate()

  return (
    <div className='cart'>
      <div>
        <h1> Add more to your booking?</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
                return <CartItem data={product}/>
            }
        })}
      </div>
      {totalAmount > 0 ? 
        (<div className='checkout'>
            <p> Subtotal: $ {totalAmount} </p>
            <button onClick={() => navigate('/')}> Continue Shopping </button>
                    
          </div> ) : ( 
          <div>
            <h3> There are no services added yet! </h3>
            <div> Need help? Call us on 03-1234-1234</div>
          </div> )
      }
    </div>
  )
}
