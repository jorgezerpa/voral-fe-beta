import { createTheme } from '@mui/material/styles';

let myTheme = createTheme({
        //PALETTE
    // palette: {
    //     primary:{
    //         light: '#FACFCF',
    //         main: '#F4C3C3',
    //         dark: '#F4B2B2',
    //     },
    // }, 
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 1000,
          lg: 1200,
          xl: 1536,
        },
    }   
});    

export default myTheme;
