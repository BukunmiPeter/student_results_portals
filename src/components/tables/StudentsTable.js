import React from 'react'
import { Box, Button, styled } from "@mui/material";
import ResultPage from '../ResultPage';
import { saveAs } from 'file-saver';
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
        "id": 2,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },
      {
        "id": 3,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },
      {
        "id": 4,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },{
        "id": 5,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },
      {
        "id": 6,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },{
        "id": 7,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },{
        "id": 8,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },{
        "id": 9,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },{
        "id": 10,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },{
        "id": 11,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },{
        "id": 12,
        "surname": "bob",
        "firstname": "Peter",
        "age": 25,
        "gender": "male",
        "levitem": "100 Levitem",
        "state": "kaduna"
      },{
        "id": 13,
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

   const handleDownload = (result) => {
if  (result){
  const resultHtml =ResultPage({ result });

   const htmlData = `
   <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Result Details</title>
      </head>
      <body>
       ${resultHtml}
      </body>
      </html>
    `;
   const blob = new Blob([htmlData], { type: 'text/html' });

    // Use file-saver to save the blob as a file
    saveAs(blob, `${result.firstname}_result.html`);
}
  
  };



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
                {item.levitem.split(" ")[0]} level
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
