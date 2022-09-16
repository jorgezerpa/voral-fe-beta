import React, { useState, useContext, useEffect } from 'react';
import { Box, Drawer } from '@mui/material'
import { Context } from '../../context/context'
import { Categories } from '.'

export const MobileCategories = ({ showCategories, toggleCategories, handleCurrentCategory }) => {
  const { cart } = useContext(Context)

  return (
        <>
          <Drawer anchor='bottom' open={showCategories} onClose={toggleCategories()} sx={{ '.MuiDrawer-paperAnchorRight': { width:{ xs:'95%', sm:'500px', borderRadius: '20px 0 0 20px' } }  }} >
            <Box onClick={toggleCategories} >close</Box>
            <Categories handleCurrentCategory={handleCurrentCategory} toggleCategories={toggleCategories} />      
          </Drawer>
        </>
  );
}
