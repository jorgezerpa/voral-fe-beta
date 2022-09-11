import React, { useState } from 'react'
import { Box, Select, MenuItem } from '@mui/material'
import { PaymentMethods } from '../PaymentMethods'

const paymentMethods = ['binance', 'paypal', 'bolivares']

export const PaymentForm = () => {
  const [paymentMethod, setPaymentMethod] = useState(paymentMethods[2])

  const handlePaymentMethod = (value) => {
    setPaymentMethod(value)
  }

  console.log(paymentMethod)

  return (
    <Box>
        <Select
          value={paymentMethod}
          label="Escoje una forma de pago"
          onChange={(e)=>handlePaymentMethod(e.target.value)}
        >
          {paymentMethods.map(method => (
            <MenuItem key={'paymentForm'+method} value={method}>{method}</MenuItem>
          ))}
        </Select>

        <PaymentMethods selectedMethod={paymentMethod} />
    </Box>
  )
}
