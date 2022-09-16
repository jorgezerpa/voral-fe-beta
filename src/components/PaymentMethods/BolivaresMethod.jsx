import React, { useRef, useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { Context } from '../../context/context'

export const BolivaresMethod = () => {
  const { handlePaymentInfo, clientInfo } = useContext(Context)
  const imageRef = useRef(null)
  const handleChange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.addEventListener("load", () => {
      handlePaymentInfo({
        bolivaresTransactionCapture: reader.result
      })
    })
    
    reader.readAsDataURL(file)
  }

  return (
    <Box>
      <Typography>1. Realiza una transferencia ó un pago móvil a las cuentas de áca abajo con el monto de "MONTO"bs. </Typography>
      <Typography>2. Haz un capture al finalizar la transacción.</Typography>
      <Typography>3. Cargalo áca </Typography>
      <Box>
        <form>
          <input type="file" ref={imageRef} onChange={handleChange} />
        </form>
      </Box>


    </Box>
  )
}
