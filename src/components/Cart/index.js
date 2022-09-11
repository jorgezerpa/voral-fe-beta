import React, { useState, useContext, useEffect } from 'react';
import { Box, Drawer } from '@mui/material';
import { CartList } from './CartList'
import { PaymentGateway } from '../PaymentGateway'
import { Context } from '../../context/context'

export const Cart = ({ showCart, toggleCart }) => {
  const { cart } = useContext(Context)
  const [showPaymentGateway, setShowPaymentGateway] = useState(false)  

  const openPaymentGateway = () => {
    setShowPaymentGateway(true)
  }

  return (
        <>
          <Drawer anchor='right' open={showCart} onClose={toggleCart()} sx={{ '.MuiDrawer-paperAnchorRight': { width:{ xs:'95%', sm:'500px', borderRadius: '20px 0 0 20px' } }  }} >
            <Box onClick={toggleCart} >close</Box>
            <CartList products={cart} openPaymentGateway={openPaymentGateway} />  
          </Drawer>

          <PaymentGateway open={showPaymentGateway} setOpen={setShowPaymentGateway} />
          {/* <OrderStatus status={status} open={openOrderStatus} setOpen={setOpenOrderStatus}  /> */}
        </>
  );
}
