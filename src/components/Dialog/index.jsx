import React from 'react'

import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import { Box } from '@mui/material'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export const GlobalDialog = ({ children, open, handleClose }) => {
  return (
    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition} sx={{ '.MuiDialog-paper':{padding: { xs: '5px', sm: '60px' }, borderRadius: '20px'}, padding: { xs: '5px', sm: '60px' } }} >
      <Box onClick={handleClose}>close</Box>
      { children }
    </Dialog>
  )
}
