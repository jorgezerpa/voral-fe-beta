import React from 'react'
import { Box } from '@mui/material'
import { BinanceMethod } from './BinanceMethod'
import { BolivaresMethod } from './BolivaresMethod'
import { PaypalMethod } from './PaypalMethod'

export const PaymentMethods = ({ selectedMethod }) => {

    const switchMethods = (method) => {
        switch(method){
            case 'paypal':
                return <PaypalMethod />
            case 'bolivares':
                return <BolivaresMethod />
            case 'binance':
                return <BinanceMethod />
        }
    }

    return (
        <Box>
            { switchMethods(selectedMethod) }
        </Box>
    )
}
