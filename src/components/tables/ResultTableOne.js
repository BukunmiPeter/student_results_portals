import React from 'react'
import { Box, Button, styled } from "@mui/material";



const courses = [
  {
        "id": 1,
        "course_code": "PDE 701",
        "course_title": "History of Education",
        "unit": 2,
        "grade": "A",
        "total_point": 8
      },
        {
        "id": 1,
        "course_code": "PDE 702",
        "course_title": "Developmental Psychology",
        "unit": 2,
        "grade": "B",
        "total_point": 9
      },
        {
        "id": 1,
        "course_code": "PDE 703",
        "course_title": "Measurement and Evaluation",
        "unit": 2,
        "grade": "A",
        "total_point": 8
      },
        {
        "id": 1,
        "course_code": "PDE 704",
        "course_title": "Educational Psychology",
        "unit": 2,
        "grade": "A",
        "total_point":9
      },
        {
        "id": 1,
        "course_code": "PDE 705",
        "course_title": "Philosophy of Education",
        "unit": 2,
        "grade": "B",
        "total_point": 8
      },
]

const columnHeads= [
  "S/N",
  "Course Code",
  "Course Title",
  "Unit",
  "Grade",
  "Total Point"
];
const ResultTableOne = () => {
  return (
     <MainTableContainer>

   <TableContainer >
        <TableHead >
          <tr style={{}}>
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
          {courses.map((item, i) => (
            <tr>

                <Tabledata >
           
                {item.id}
              </Tabledata>
              <Tabledata >
             
                {item.course_code}
              </Tabledata>

              <Tabledata >
                {item.course_title}
              </Tabledata>
              <Tabledata>
                {item.unit}
              </Tabledata>
              <Tabledata >
                {item.grade}
              </Tabledata>
                <Tabledata >
                {item.total_point}
              </Tabledata>
            </tr>
          ))}
        </TableBody>
      </TableContainer>
      </MainTableContainer>
  )
}

export default ResultTableOne


const MainTableContainer = styled(Box)(({ theme }) => ({
marginBottom:"50px"
}));

const TableBody = styled("tbody")(({ theme }) => ({
     backgroundColor: '#FFFFFF',
     background:"#F2F2F2",
     borderCollapse: "collapse",
      border: "none",
    borderSpacing: 0,

        '& tr:nth-child(even)': {
  backgroundColor: "#ffffff",

    },

}));

const TableContainer = styled("table")(({ theme }) => ({

   width:"100%",
  alignItems:"center",
   
    height:"100px",
    background:"#ffffff"
}));

const TableHead = styled("thead")(({ theme }) => ({
 backgroundColor: '#0D7590',
 


}));

const TableH = styled("th")(({ theme }) => ({
    color:"#ffffff",
    whiteSpace: 'nowrap', 
    padding:"8px 16px",
    textAlign: 'center', 
    lineHeight:"16.8px",
    fontSize: '14px', 
    fontWeight: 700,
    


}));




const Tabledata = styled("td")(({ theme }) => ({
    whiteSpace: 'nowrap',
    alignItems:"center",
  padding: '14px', 
textAlign:"center",
    fontSize: '14px', 
     textTransform: "capitalize"


}));