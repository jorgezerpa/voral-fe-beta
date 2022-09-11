import React, { useState, useContext } from 'react'
import { Box, Grid } from '@mui/material'
import { Categories } from '../../components/Categories'
import { CategorieBanner } from '../../components/CategorieBanner'
import { Cart } from '../../components/Cart'
import { ProductsGrid } from '../../layouts/ProductsGrid'

export const Store = () => {
  const [currentCategory, setCurrentCategory] = useState('')
  const [showCart, setShowCart] = useState(false)

  const handleCurrentCategory = (category) => {
    setCurrentCategory(category)
  }

  const toggleCart = () => {
    setShowCart(prev => !prev)
  }


  return (
      <Box sx={{ position: 'relative' }}>
        <Grid container>
          <Grid item sm={2} md={1}  sx={{ display: { xs: 'none', sm:'block' } }}>
            <Categories handleCurrentCategory={handleCurrentCategory} />
          </Grid>
          <Grid item sm={10} md={11} sx={{ height: '100vh', overflow: 'auto' }}>
            <CategorieBanner categoryName={currentCategory} />
            <ProductsGrid currentCategory={currentCategory} />
          </Grid>
        </Grid>
        <Box onClick={toggleCart} sx={{ position: 'absolute', top: '20px', right: '40px' }}>
          Cart
        </Box>
        <Cart showCart={showCart} toggleCart={toggleCart} />
      </Box>
  )
}
