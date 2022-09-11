import React, { useEffect, useState } from 'react';
import { Box, List, ListItem, Typography } from '@mui/material'
import { getCategories } from '../../api/api'

export const Categories = ({ handleCurrentCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async()=>{
      const categories = await getCategories()
      setCategories(categories)
    })()
  
  }, [])
  
  return (
    <Box sx={{ width: '100%' }}>
        <List sx={{ maxHeight: '100vh', overflowY: 'auto', overflowX: 'hidden' }}>
          <ListItem onClick={()=>handleCurrentCategory('')} disablePadding sx={{ width: '100%', position: 'relative', display:'flex', alignItems: 'center', flexDirection: 'column', mb: '10px'  }}>
                <Box sx={{ position: 'relative', width: { xs:'100px', md: '80px', lg:'100px' } }}>
                  <img src={categories[0]?.img} alt='categorie' width='100%' style={{ borderRadius: '20px' }} />  
                </Box>
                <Typography variant='body'>todo</Typography>
          </ListItem>
          {categories.map((category, index) => (
            <ListItem onClick={()=>handleCurrentCategory(category.name)} key={category+index+'cat'} disablePadding sx={{ width: '100%', position: 'relative', display:'flex', alignItems: 'center', flexDirection: 'column', mb: '10px'  }}>
                  <Box sx={{ position: 'relative', width: { xs:'100px', md: '80px', lg:'100px' } }}>
                    <img src={category.img} alt='categorie' width='100%' style={{ borderRadius: '20px' }} />  
                  </Box>
                  <Typography variant='body'>{category.name}</Typography>
            </ListItem>
          ))}
        </List>
    </Box>
  );
}