import React, {useContext} from 'react'
import {CreditCardInput} from './components/CreditCardInput'
import { CartContext } from '../../../services/cart/cartContext'

const {cart}=useContext(CartContext)


const CheckoutScreen = () => {
  return (
    <CreditCardInput/>
  )
}

export default CheckoutScreen
