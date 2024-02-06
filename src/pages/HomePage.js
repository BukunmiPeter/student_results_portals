import React from 'react'
import StudentsTable from '../components/tables/StudentsTable'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box, Button,Grid,styled } from '@mui/material';

const HomePage = () => {

    const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];
  return (



    <PageWrapper>
        <div style={{width:"100%"}}><h1>Student Data Table</h1>
        </div>
        

         <FilterMainContainer>
            <Text2>Filter Student Table by:  </Text2>
  <Grid container spacing={2} justifyContent="space-between" width="60%" style={{ flexDirection: 'row', marginLeft:"20px" }}>

            <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
   <TextFieldWrapper
          id="age"
          select
          label="Age"
         placeholder='select Age'
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextFieldWrapper>

            </Grid>
            <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
         <TextFieldWrapper
          id="state"
          select
          label="State"
    
     
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextFieldWrapper>


            </Grid>
            <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>

     <TextFieldWrapper
          id="level"
          select
          label="Level"
   
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextFieldWrapper>

            </Grid>
            <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>

   <TextFieldWrapper
          id="gender"
          select
          label="Gender"
       
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextFieldWrapper>

            </Grid>
            <Grid style={{ gridColumn: 'span 2' }} item xl={4} lg={4} md={12} sm={12} xs={12}>
 <Button style={{background:"#46C35F", width:"100%", textTransform: "capitalize"}} variant="contained">Search</Button>
        </Grid>


            </Grid>
        </FilterMainContainer> 
   <StudentsTable/>
    </PageWrapper>
  )
}

export default HomePage


const  TextFieldWrapper= styled(TextField)(({ theme }) => ({
    width:"100%",
height:"64px"
}));

const  FilterMainContainer= styled(Box)(({ theme }) => ({
    width:"90%",
    background:"#ffffff",
    padding:"20px 0 0 0px",
    marginBottom:"50px"
   

}));


const  PageWrapper= styled(Box)(({ theme }) => ({
  height:"100vh",
 display:"flex",
 justifyContent:"center",
 alignItems:"center",
 flexDirection:"column"
}));

const Text2= styled("p")(({ theme }) => ({
color:"#616161",
fontSize:"24px",
marginLeft:"35px"
}));