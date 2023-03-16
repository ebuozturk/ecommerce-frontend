import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react'


 const PaymentForm = () => {
  return (
    <Box
    sx={{
      display:'flex',
      flexDirection:'column',
      p:2,
      boxSizing:'border-box'
    }}
  >
    <Box
      sx={{
        p:1,
    
      }}
    >
      <Typography
        variant='h4'
      >
        Cart
      </Typography>

    </Box>
    <Box
      sx={{
        display:'flex',
        flexWrap:'wrap',
        flex:' 1 0 21%',
        boxSizing:'border-box',
        gap:1,
        m:2,
      }}
    >
      <TextField style={{
        width:'30%'
      }} label='Name'/>
      <TextField style={{
        width:'30%'
      }}  label='No'/>
      <TextField style={{
        width:'30%'
      }}  label='Expiry Date'/>
      <TextField style={{
        width:'30%'
      }}  label='Cvc'/>
     
    </Box>
  </Box>
)
}
export default PaymentForm;