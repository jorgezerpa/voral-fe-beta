import React from 'react'

import { Grid, Typography } from '@mui/material'
import { AddToCartButton } from '../../components/AddToCartButton'

export const ProductDetail = ({ product }) => {
  return (
    <>
        <Typography textAlign='center'>{product.name}</Typography>
        <Grid container>
            <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent:'center' }}>

                <img width='250px' src={product.img} alt={product.name} />
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'left' }}>
                <Typography>{product.price}$</Typography>
                <Typography>{product.size}</Typography>
                <Typography>{product.description}</Typography>
                <AddToCartButton productId={product.id} />
            </Grid>
        </Grid>
    </>
  )
}
