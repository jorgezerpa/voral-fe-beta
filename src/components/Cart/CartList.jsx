import React from 'react'
import { Box, Button, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

export const CartList = ({ products, openPaymentGateway }) => {
  return (
    <Box sx={{ width:'100%' }} role="presentation" >
      <List sx={{ width:'100%' }}>
        {products.map((product) => (
          <ListItem disablePadding>
            <ListItemButton alignItems='flex-start'>
              <ListItemIcon sx={{ overflow:'hidden', borderRadius:5, overflow:'hidden', width: '80px', height:'80px' }}>
                <img src={product.img} width='100%' ></img>
              </ListItemIcon>
              <ListItemText sx={{paddingLeft:'15px', '.MuiListItemText-primary': {fontWeight:'bold'} }} primary={product.name} secondary={product.price} />
              <ListItemText sx={{paddingLeft:'15px', '.MuiListItemText-primary': {textAlign:'right', color: 'rgba(230,50,50,.5)'} }} primary='eliminar' />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      <Divider />
      <Typography variant='h6' textAlign='right' mt={2} mr={2}>total: 100$</Typography>
      <Box sx={{display:'flex', justifyContent:'center', py:3 }}>
        <Button variant='contained' onClick={openPaymentGateway} >Ordenar</Button>
      </Box>
      {/* { !showForm && <Box sx={{ minHeight: '30vh' }}></Box>} */}
    </Box>
  )
}
