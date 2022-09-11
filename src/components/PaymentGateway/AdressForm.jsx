import React, { useState, useContext, useRef } from 'react'
import { TextField, Box, Select, MenuItem } from '@mui/material'
import { Map } from '../Map'
import { Context } from '../../context/context'

export const AdressForm = () => {
  const { setClientInfo, clientInfo } = useContext(Context)
  const [showAddressForm, setShowAdressForm] = useState(true)
  const direction1 = useRef(null)
  const direction2 = useRef(null)
  const references = useRef(null)

  const handleChange = () => {
    setClientInfo(prev =>({
      ...prev,
      direction1: direction1.current.value,
      direction2: direction2.current.value,
      references: references.current.value,
    }))
  }

  const toggleShowAddressForm = () => {
    setShowAdressForm(!showAddressForm)
  }

  return (
    <>
      <Box onClick={toggleShowAddressForm} >prefiero marcarlo en el mapa</Box>

      <Box sx={{ display: showAddressForm ? 'block' : 'none' }}>
      <Select
          value={clientInfo.city || 'Mérida'}
          label="ciudad"
          onChange={(e)=>setClientInfo(prev=>({...prev, city: e.target.value}))}
        >
          <MenuItem value={'Mérida'}>Mérida</MenuItem>
          <MenuItem value={'Lagunillas'}>Lagunillas</MenuItem>
          <MenuItem value={'Ejido'}>Ejido</MenuItem>
      </Select>
        <TextField inputRef={direction1}  onChange={handleChange} fullWidth id="standard-basic" label="Dirección 1" variant="standard" />
        <TextField inputRef={direction2} onChange={handleChange} fullWidth id="standard-basic" label="Direccion 2" variant="standard" />
      </Box>

      <Box sx={{ display: !showAddressForm ? 'block' : 'none' }}>
        <Map />
      </Box>

      <TextField inputRef={references} onChange={handleChange} fullWidth id="standard-basic" label="Referencias extra" variant="standard" />
    </>
  )
}
