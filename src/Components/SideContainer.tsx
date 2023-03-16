import { Box, Container, Typography } from '@mui/material';
import React, { ReactNode } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

type sideContainerProps={
    title:string
    setShow: (isShowed:boolean) => void,
    children: ReactNode
}


 const SideContainer = ({title,setShow,children}:sideContainerProps) => {
  return (
    <Container
    sx={{
      display:"flex",
      flexDirection:'column',
      position:"fixed",
      top:0,
      right:0,
      bottom:0,
      width:"30%",
      background:"rgba(246, 244, 244,0.99)",
      boxShadow:5,
      borderRadius:2,
      pr:5,
      pl:5,
      zIndex:10
    }}
  >
    <Box></Box>
    <Box
      sx={{
        display:'flex',
        alignItems:'center',
        height:100
      }}
    >
      <ArrowBackIosIcon sx={{
        color:'black',
        fontSize:40,
        cursor:'pointer'

      }}
      onClick={()=>setShow(false)}
      />
      <Typography
        variant='h4'
        color='black'
      >
        {title}
      </Typography>
      
    </Box>
      {children}
    </Container>
  )
}
export default SideContainer;