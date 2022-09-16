import React, { useState, useContext } from 'react'
import { Box, Select, MenuItem } from '@mui/material'
import { PaymentMethods } from '../PaymentMethods'
import { Context } from '../../context/context'
import { useEffect } from 'react'

// const paymentMethods = ['binance', 'paypal', 'bolivares']
// const paymentMethods = ['binance', 'bolivares']
const paymentMethods = [ 'bolivares']

export const PaymentForm = () => {
  const { handlePaymentInfo, clientInfo } = useContext(Context)
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0])
  console.log(clientInfo)

  useEffect(()=>{
    handlePaymentInfo({paymentMethod: paymentMethod})
  }, [paymentMethod])
  
  return (
    <Box>
        <Select
          value={paymentMethod}
          label="Escoje una forma de pago"
          onChange={(e)=> setPaymentMethod(e.target.value) }
        >
          {paymentMethods.map(method => (
            <MenuItem key={'paymentForm'+method} value={method}>{method}</MenuItem>
          ))}
        </Select>

        <PaymentMethods selectedMethod={paymentMethod} />
    </Box>
  )
}
