import React, { useEffect, useState } from 'react'
import StudentsTable from '../components/tables/StudentsTable'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box, Button,CircularProgress,Grid,styled } from '@mui/material';
import { gerFilterdata, getAllAges, getAllGender, getAllLevels, getAllStates } from '../util/apis';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


const fetchData = async (apiFunction, setterFunction) => {
  try {
    const response = await apiFunction();
    setterFunction(response.data.data);
  } catch (error) {
    console.log("error", error);
  }
};
const HomePage = () => {
    const [ages, setAges] = useState([])
     const [states, setStates] = useState([])
      const [levels, setLevels] = useState([])
       const [gender, setGender] = useState([])
       const [selectedAge, setSelectedAge] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [searchedData, setSearchedData] = useState([])
const [loading, setLoading]=useState(false)
   const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));



       const filterData = {
    age: selectedAge,
    state: selectedState,
    level: selectedLevel,
    gender: selectedGender
}


const handleSubmitSearch =async() =>{
    try{
setLoading(true)
 const response = await gerFilterdata(filterData)
    setSearchedData(response.data.data.students)
    console.log(response.data.data.students,"response")
    }catch(error){
console.log(error)
    }
    setLoading(false)
}

  useEffect(() => {
    fetchData(getAllAges, setAges);
    fetchData(getAllGender, setGender);
    fetchData(getAllStates, setStates);
    fetchData(getAllLevels, setLevels);
  }, []);



  return (
    <PageWrapper>
        <div style={{ width:"100%"}}><h1 style={{marginLeft:"40px" }}>Student Data Table</h1>
        </div>
        

         <FilterMainContainer>
            <Text2>Filter Student Table by:  </Text2>
  <Grid container spacing={2} justifyContent="space-between" width="60%" style={{ flexDirection: 'row', marginLeft:isSmallScreen?" ":"20px" }}>

            <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
   <TextFieldWrapper
          id="age"
          select
          label="Age"
          value={selectedAge}
          onChange={(e) => setSelectedAge(e.target.value)}
         placeholder='select Age'
        >
          {ages?.map((option) => (
            <MenuItem key={option.id} value={option.age}>
              {option.age}
            </MenuItem>
          ))}
        </TextFieldWrapper>

            </Grid>
            <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
         <TextFieldWrapper
          id="state"
          select
          label="State"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
    
     
        >
          {states?.map((option) => (
            <MenuItem key={option.id} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextFieldWrapper>


            </Grid>
            <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>

     <TextFieldWrapper
          id="level"
          select
          label="Level"
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
   
        >
          {levels.map((option) => (
            <MenuItem key={option.id} value={option.level}>
              {option.level}
            </MenuItem>
          ))}
        </TextFieldWrapper>

            </Grid>
            <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>

   <TextFieldWrapper
          id="gender"
          select
          label="Gender"
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
       
        >
          {gender?.map((option) => (
            <MenuItem key={option.id} value={option.gender}>
              {option.gender}
            </MenuItem>
          ))}
        </TextFieldWrapper>

            </Grid>
            <Grid style={{ gridColumn: 'span 2' }} item xl={4} lg={4} md={12} sm={12} xs={12}>
 <Button style={{background:"#46C35F",padding:"10px 10px",  width:"100%", textTransform: "capitalize"}} onClick={handleSubmitSearch} variant="contained">{loading?"Loading...":"Search"}</Button>
        </Grid>


            </Grid>
        </FilterMainContainer> 
   <StudentsTable searchedData={searchedData}/>
    </PageWrapper>
  )
}

export default HomePage
export const customBreakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1279,
    xl: 1440,
    xxl: 1899,
    xxxl: 1900,
};

const  TextFieldWrapper= styled(TextField)(({ theme }) => ({
    width:"100%",
height:"64px"
}));

const  FilterMainContainer= styled(Box)(({ theme }) => ({
    width:"90%",
    background:"#ffffff",
    padding:"20px 0 20px 0px",
    marginBottom:"50px",
      [`@media (max-width: ${customBreakpoints.lg}px)`]: {
        alignItems:"center",
        display:"flex",
        flexDirection:"column"
        
    },
   
}));

// @media screen and (min-width: 601px) and (max-width: 6000px) {
//     div.example {
//         font-size: 5vw;
//     }
// }


const  PageWrapper= styled(Box)(({ theme }) => ({
  // height:"100vh",
 display:"flex",
 justifyContent:"center",
 alignItems:"center",
 flexDirection:"column",
 paddingBottom:"40px"
}));

const Text2= styled("p")(({ theme }) => ({
color:"#616161",
fontSize:"24px",
marginLeft:"35px"
}));