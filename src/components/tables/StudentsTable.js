import React from 'react'
import { Box, Button, styled } from "@mui/material";
const students= [
      {
        "id": 1,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },
      {
        "id": 1,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },
      {
        "id": 1,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },
      {
        "id": 1,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },{
        "id": 1,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },
      {
        "id": 1,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },{
        "id": 1,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },{
        "id": 1,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },{
        "id": 1,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },{
        "id": 1,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },{
        "id": 1,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },{
        "id": 1,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },{
        "id": 1,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      }
    ]
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
          {students.map((item, i) => (
            <tr>

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
                {item.levitem.split(" ")[0]} level
              </Tabledata>
                <Tabledata >
                {item.state}
              </Tabledata>
                <Tabledata>
               <DWLButton>Download Result</DWLButton>
              </Tabledata>
            </tr>
          ))}
        </TableBody>
      </TableContainer>
      </MainTableContainer>
    
  )
}

export default StudentsTable


const Cont = styled(Box)(({ theme }) => ({
  //  display:"flex",

}));

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
    padding:"8px 16px",
    textAlign: 'center', 
    lineHeight:"16.8px",
    fontSize: '14px', 
    fontWeight: 700,


}));




const Tabledata = styled("td")(({ theme }) => ({
    whiteSpace: 'nowrap',
    alignItems:"center",
    padding: '16px', // Tailwind: p-4
    paddingLeft: '24px', // Tailwind: px-6
textAlign:"center",
    fontSize: '14px', // Tailwind: text-sm
     textTransform: "capitalize"


}));

const DWLButton = styled("button")(({ theme }) => ({
background:"#46C35F",
color:"#FFFFFF",
border:"none",
cursor:"pointer",
fontSize:"12px",
fontWeight:500,
lineHeight:"14.4px",
padding:"10px 12px"
}));