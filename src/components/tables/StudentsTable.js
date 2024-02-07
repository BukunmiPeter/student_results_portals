import React, { useEffect, useState } from 'react'
import { Box, Button, styled } from "@mui/material";
import ResultPage from '../ResultPage';
import html2pdf from 'html2pdf.js';
import { getAllData } from '../../util/apis';
import CircularIndeterminate from '../Loader';

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

const StudentsTable = () => {
  const [resultToDownload, setResultToDownload] = useState(null)
    const [isVisible, setIsVisible] = useState(false);
    const [students,setStudents] = useState([])
    const [error, setError]= useState("")
    const [loading,setLoading]= useState(false)

     useEffect(() => {

    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await getAllData()
        setStudents(response.data.data.students);
      } catch (error) {
        setError('Error fetching data');
      } 
      setLoading(false)
    };

    fetchData();
  }, []);


const handleDownload = (result) => {
    const resultPageElement = document.getElementById('result-page');
console.log(resultPageElement, "fhfhfh")
setResultToDownload(result)
    if (resultPageElement) {
      const pdfOptions = {
        // margin: 10,
        filename: `${result.firstname}.pdf`,
        // image: { type: 'jpeg', quality: 0.98 },
        // html2canvas: { scale: 2 },
        // jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
         image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2, width: resultPageElement.offsetWidth * 2, height: resultPageElement.offsetHeight * 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };

    html2pdf().from(resultPageElement).set(pdfOptions).save();
    }
  };


  return (
<>
 {
      loading? <CircularIndeterminate/> : 
      
          <MainTableContainer>
           <ResultPage result={resultToDownload}/>
        {/* </div> */}
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
          {students?.map((item, i) => (
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
                  <Button style={{background:"#46C35F",  textTransform: "capitalize"}} onClick={()=>handleDownload(item)} variant="contained">Download Result</Button>
             
              </Tabledata>
            </tr>
          ))}
        </TableBody>
      </TableContainer>
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
    background:"#ffffff"
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
    padding: '16px', 
    paddingLeft: '24px',
textAlign:"center",
    fontSize: '14px', 
     textTransform: "capitalize"


}));
