import React, { useContext, useState, useEffect } from 'react'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import { AddToCartButton } from '../AddToCartButton'
import { Context } from '../../context/context'

export const ProductCard = ({ product, handleShowProductDetail }) => {
  const { cart } = useContext(Context)
  const { name, price, img, size, id } = product
  const [isAdded, setIsAdded] = useState(false)

  useEffect(()=>{
    cart.includes(product) ? setIsAdded(true) : setIsAdded(false)
  }, [cart])

  return (
    <Card sx={{width: '230px'}} onClick={()=>handleShowProductDetail(id)}>
        <CardMedia sx={{ height: '200px', position: 'relative' }}>
            <img src={img} alt='product' style={{ position: 'absolute', top:'50%', left: '50%', transform: 'translate(-50%, -50%)', height: '200px'  }}  />
        </CardMedia>
        <CardContent>
            <Typography variant='body1'>{name}</Typography>
            <Typography variant='body1'>talla: {size}</Typography>
            <Typography variant='body1'>{price}$</Typography>
            <AddToCartButton productToAdd={product} isAdded={isAdded} />
        </CardContent>
    </Card>
  )
}
