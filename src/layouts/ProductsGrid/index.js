import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import { getProducts } from '../../api/api'
import { ProductCard } from '../../components/ProductCard'
import { GlobalDialog } from '../../components/Dialog'
import { ProductDetail } from './ProductDetail'

export const ProductsGrid = ({ currentCategory }) => {
  const [products, setProducts] = useState([])
  const [showProductDetail, setShowProductDetail] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({})

  
  
  useEffect(() => {
    (async()=>{
      const products = await getProducts()
      setProducts(products)
    })()  
  }, [])
  
  const handleCategoryChange = (products) => {
    if(currentCategory === '') return products
    return products.filter(product => product.category === currentCategory) 
  }
  
  const handleShowProductDetail = (id) => {
    const productIndex = products.findIndex(product => product.id === id)
    setSelectedProduct(products[productIndex])
    setShowProductDetail(true)
  }

  const closeProductDetail = () => {
    setShowProductDetail(false)
  }

  return (
    <Grid container mt={10} justifyContent='center' spacing={1}>
      {handleCategoryChange(products).map((product, index) => (
        <Grid key={product.name+index+'product'} item xs={10} sm={5} md={4} sx={{ display:'flex', justifyContent: 'center', mb: 3 }} >
          <ProductCard product={product} handleShowProductDetail={handleShowProductDetail} />
        </Grid>
      ))}

      { showProductDetail && <GlobalDialog open={showProductDetail} handleClose={closeProductDetail} >
        <ProductDetail product={selectedProduct} />
      </GlobalDialog> }

    </Grid>
  )
}
