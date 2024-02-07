import axios from "axios";

const API = axios.create({ baseURL: "https://test.omniswift.com.ng/api" });
 
   export const getAllData = ()=> API.get('/viewAllData')
   export const getAllLevels = ()=> API.get('/viewAllLevels')
    export const getAllStates = ()=> API.get('/viewAllStates')
     export const getAllGender = ()=> API.get('/viewAllGender')
     export const getAllAges = ()=> API.get('/viewAllAges')
    export const gerFilterdata = (filterData) => API.post('/filterData', filterData, {
  headers: {
    'Content-Type': 'application/json',
  },
});



   