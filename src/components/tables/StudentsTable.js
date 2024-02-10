import React, { useEffect, useState } from 'react'
import { Box, Button, Modal, styled } from "@mui/material";
import ResultPage from '../ResultPage';
import html2pdf from 'html2pdf.js';
import { getAllData } from '../../util/apis';
import CircularIndeterminate from '../Loader';
import ResultModal from '../ResultModal';

const columnHeads= [
  "S/N",
  "Surname",
  "First Name",
  "Age",
  "Gender",
  "Level",
  "State",
  "Action"
];

const StudentsTable = ({searchedData}) => {
  const [resultToDownload, setResultToDownload] = useState(null)
    const [isVisible, setIsVisible] = useState(false);
    const [students,setStudents] = useState([])
    const [error, setError]= useState("")
    const [loading,setLoading]= useState(false)
    const [openModal, setOpenModal] = useState(false)


    const handleDownload =(result)=>{
      setResultToDownload(result)
        setOpenModal(true)
    
    }

    const HandleCloseModal =()=>{
      setOpenModal(false)
    }

 useEffect(() => {
    if (searchedData && searchedData.length > 0) {
      setStudents(searchedData);
    } else {
      const fetchData = async () => {
        try {
          setLoading(true);
          const response = await getAllData();
          setStudents(response.data.data.students);
        } catch (error) {
          setError('Error fetching data');
        }
        setLoading(false);
      };

      fetchData();
    }
  }, [searchedData]);





  return (
<>
 {
  loading? <CircularIndeterminate/> :     <MainTableContainer>
         {isVisible &&  <ResultPage result={resultToDownload}/>}
        
   <TableContainer >
        <TableHead >
          <tr>
            {columnHeads.map((item, i) => (
              <TableH
                key={i}
              
              
              >
                {item}
              </TableH>
            ))}
          </tr>
        </TableHead>
        <TableBody >
          {  students?.map((item, i) => (
            <tr key={item?.id}>
                <Tabledata >
                {item.id}
              </Tabledata>
              <Tabledata >
             
                {item.surname}
              </Tabledata>

              <Tabledata >
                {item.firstname}
              </Tabledata>
              <Tabledata>
                {item.age}
              </Tabledata>
              <Tabledata >
                {item.gender}
              </Tabledata>
                <Tabledata >
                {item?.level}
              </Tabledata>
                <Tabledata >
                {item.state}
              </Tabledata>
                <Tabledata>
                  <Button style={{background:"#46C35F", maxWidth:"50%", padding:"10px",fontSize:"12px",lineHeight:"14.4px", textTransform: "capitalize"}} onClick={()=>handleDownload(item)} variant="contained">Download Result</Button>
             
              </Tabledata>
            </tr>
          ))}
        </TableBody>
      </TableContainer>

<ResultModal useResult={resultToDownload} open={openModal} close={HandleCloseModal}/>
      
      </MainTableContainer>
 }
      
      
      
       
        
      
    
</>
   
     
    
  )
}

export default StudentsTable



const MainTableContainer = styled(Box)(({ theme }) => ({
  width:"90%",
   display:"flex",
// padding:"40px",
 height:"50vh",
 
overflowY: 'scroll',
  scrollbarWidth: '10px',
  WebkitOverflowScrolling: 'touch',
  '&::-webkit-scrollbar': {
    width: '10px',
   
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#46C35F',
     borderRadius:"5px"
  },

  '&::-webkit-scrollbar-track': {
    backgroundColor: '#f1f1f1',
  },
}));

const TableBody = styled("tbody")(({ theme }) => ({
     backgroundColor: '#FFFFFF',
  


}));


const TableContainer = styled("table")(({ theme }) => ({
  //  display:"flex",
   width:"100%",
  alignItems:"center",
   
    height:"100px",
    background:"#ffffff",
    paddingBottom:"20px",
}));

const TableHead = styled("thead")(({ theme }) => ({
 backgroundColor: '#F9F9FA'

}));

const TableH = styled("th")(({ theme }) => ({
    color: '#343434',
    whiteSpace: 'nowrap', 
    padding:"16px",
    textAlign: 'center', 
    lineHeight:"16.8px",
    fontSize: '14px', 
    fontWeight: 700,


}));




const Tabledata = styled("td")(({ theme }) => ({
    whiteSpace: 'nowrap',
    alignItems:"center",
    padding: '1rem', 
    paddingLeft: '1.5rem',
textAlign:"center",
    fontSize: '14px', 
     textTransform: "capitalize"


}));
