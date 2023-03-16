import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import React from 'react'

const QuantityButtons = (props:any) => {
    const sx = props?.sx;


    function handleOnClick(){

    }

  return (
    <Box
        sx={sx}
    >
<Box>
<ButtonGroup
  variant="contained"
  
>
  <Button
  onClick={props?.decreaseFunction}

>-</Button>
  <Button 
  variant="text" 
  disabled 
  style={{
    borderTop:1,
    borderBottom:1,

    }}>{props.quantity}</Button>        
  <Button
  onClick={props?.increaseFunction}
  >+</Button>
</ButtonGroup>
        </Box>
    </Box>
  )
}
export default  QuantityButtons;