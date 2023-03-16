import { Box } from '@mui/material';
import React from 'react'

 const Banner = () => {
  return (
    <>
    <Box
    component='img'
    src='https://beebom.com/wp-content/uploads/2022/02/iphone-14-cover-banner-2.jpg?w=1920'
    sx={{
      width:"100%",
      height:600,
      borderRadius:4
    }}
    />

    </>
    )
}

export default Banner;