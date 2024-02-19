'use client'
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import BarChartIcon from '@mui/icons-material/BarChart';
import StarHalfIcon from '@mui/icons-material/StarHalf';

function TabPulse() {
    const [value, setValue] = React.useState('grafico');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
      setValue(newValue);
    };

    return (
        <Box sx={{ width: 'auto' }} className="">
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          variant="fullWidth"
          aria-label="secondary tabs example"
          TabIndicatorProps={{
            sx: {
              bgcolor: "#9c27b0",
              height: "100%",
              zIndex:"0",
              borderRadius:"100px"
            }
          }}  
          sx={{
            "& .MuiTabs-flexContainer":{
                position:"relative",
                zIndex:"1"
            },
            "& .Mui-selected":{color:"white !important"},
          }} 
          className='p-1 border border-purple-700 rounded-full inline-flex'     
        >
          <Tab icon={<BarChartIcon/>} iconPosition="start" value="grafico" label="Grafico" className='rounded-full !h-[40px] !min-h-[40px] shrink-0' />
          <Tab icon={<StarHalfIcon/>} iconPosition="start" value="pulso" label="Pulso" className='rounded-full !h-[40px] !min-h-[40px] shrink-0' />
        </Tabs>
      </Box>
    );
}

export default TabPulse;
