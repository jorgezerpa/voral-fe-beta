import React, { useContext } from 'react'
import { Button } from '@mui/material'

import { Context } from '../../context/context'

export const AddToCartButton = ({ productToAdd, isAdded }) => {
  const { cart, setCart } = useContext(Context)

  const handleAddToCart = (productToAdd) => {
    setCart(prev => {
      if(cart.includes(productToAdd.id)) return [...prev]
      return [...prev, productToAdd]
    })
  }

  const handleRemoveFromCart = (productToAdd) => {
    const newCart = cart.filter(product => product.id !== productToAdd.id)
    setCart(newCart)
  }

  return (
    <Button onClick={(e) => {
      e.stopPropagation()
      isAdded ? handleRemoveFromCart(productToAdd) : handleAddToCart(productToAdd)
    }}
    >{ isAdded ? 'remove to Cart' : 'add to cart' }</Button>
  )
}
