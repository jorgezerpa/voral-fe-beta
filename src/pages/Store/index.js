import React, { useState, useContext } from 'react'
import { Box, Grid } from '@mui/material'
import { Categories } from '../../components/Categories'
import { CategorieBanner } from '../../components/CategorieBanner'
import { Cart } from '../../components/Cart'
import { MobileCategories } from '../../components/Categories/MobileCategories'
import { ProductsGrid } from '../../layouts/ProductsGrid'
import { MobileBottomNavigation } from '../../components/MobileBottomMenu'

export const Store = () => {
  const [currentCategory, setCurrentCategory] = useState('')
  const [showCart, setShowCart] = useState(false)
  const [showCategories, setShowCategories] = useState(false)

  const handleCurrentCategory = (category) => {
    setCurrentCategory(category)
  }

  const toggleCart = () => {
    setShowCart(prev => !prev)
  }

  const toggleCategories = () => {
    setShowCategories(prev => !prev)
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
        <Box onClick={toggleCart} sx={{ position: 'absolute', top: '20px', right: '40px', display: { xs: 'none', sm:'block' } }}>
          Cart
        </Box>
        <Cart showCart={showCart} toggleCart={toggleCart} />
        <MobileCategories showCategories={showCategories} toggleCategories={toggleCategories} handleCurrentCategory={handleCurrentCategory} />

        <Box sx={{position:'absolute', bottom: 0, left:0, width: '100%', display: { xs: 'block', sm:'none' } }}>
          <MobileBottomNavigation toggleCategories={toggleCategories} toggleCart={toggleCart} />
        </Box>
      </Box>
  )
}
