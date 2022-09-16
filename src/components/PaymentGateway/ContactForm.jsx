import React, { useRef, useContext } from 'react'
import { TextField, Box, Button } from '@mui/material'
import { Context } from '../../context/context'

export const ContactForm = () => {
  const { handleContactInfo } = useContext(Context)
  const name = useRef(null)
  const phone = useRef(null)
  const email = useRef(null)

  const handleChange = () => {
    handleContactInfo({
      name: name.current.value,
      phone: phone.current.value,
      email: email.current.value,
    })
  }

  return (
    <Box sx={{ paddingX: 5, mt: 3 }} >
      <TextField inputRef={name}  onChange={handleChange} fullWidth id="standard-basic" label="Tu Nombre" variant="standard" />
      <TextField inputRef={phone} onChange={handleChange} fullWidth id="standard-basic" label="Télefono" variant="standard" />
      <TextField inputRef={email} onChange={handleChange} fullWidth id="standard-basic" label="email" variant="standard" />
      
      <Box sx={{ minHeight: '10vh' }}></Box>
    </Box>
  )
}
