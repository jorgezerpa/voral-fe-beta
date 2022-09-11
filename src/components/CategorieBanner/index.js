import React from 'react'
import { Box, Typography } from '@mui/material'

export const CategorieBanner = ({ categoryName }) => {
  return (
    <Box sx={{ height: '200px', width: '100%', position: 'relative', backgroundImage: 'url(https://i.pinimg.com/736x/ca/c9/c8/cac9c8fa80897ed8e842c0f61bb7e97d.jpg)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat:'no-repeat' }}>
      <Typography variant='h3' sx={{ position: 'absolute', bottom: '10px', left: '10xp' }}>
        { Boolean(categoryName) ? categoryName : 'Todo' }
      </Typography>
    </Box>
  )
}
