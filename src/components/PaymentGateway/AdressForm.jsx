import React, { useState, useContext, useRef, useEffect } from 'react'
import { TextField, Box, Select, MenuItem } from '@mui/material'
import { Map } from '../Map'
import { Context } from '../../context/context'

export const AdressForm = () => {
  const { handleAddressInfo } = useContext(Context)
  const [showAddressForm, setShowAdressForm] = useState(true)
  const [city, setCity] = useState('Mérida')
  const direction1 = useRef(null)
  const direction2 = useRef(null)
  const references = useRef(null)

  //use effect  to handle select input change (setCity)
  useEffect(()=>{
    handleChange()
  }, [city])

  const handleChange = () => {
    handleAddressInfo({
      city: city,
      direction1: direction1.current.value,
      direction2: direction2.current.value,
      references: references.current.value,
    })
  }

  const toggleShowAddressForm = () => {
    setShowAdressForm(!showAddressForm)
  }

  return (
    <>
      <Box onClick={toggleShowAddressForm} >prefiero marcarlo en el mapa</Box>

      <Box sx={{ display: showAddressForm ? 'block' : 'none' }}>
      <Select
          value={ city }
          label="ciudad"
          onChange={(e) => setCity(e.target.value) }
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
