import { Box, Step, StepConnector, stepConnectorClasses, StepLabel, Stepper, styled } from '@mui/material'
import React from 'react'

type stepIndex = {
    currentStepIndex:number
}
const steps = [
    'Address',
    'Payment',
    'Finish'
  ];

 const MultiStepBar = ({currentStepIndex}:stepIndex) => {
  return (
      <>
  <Box 
  sx={{ 
    width: '100%',
    p:2,
    boxSizing:'border-box',
    m:2
     }}>
      <Stepper activeStep={currentStepIndex}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          
          return (
            <Step key={label} {...stepProps} >
              <StepLabel {...labelProps} >{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

    </Box></>
  )
}
export default MultiStepBar;