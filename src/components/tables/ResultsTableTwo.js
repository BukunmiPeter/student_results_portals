import React from 'react'
import { Box, Button, styled } from "@mui/material";



const gpatd = [
  {
        "unts":"028",
        "untd": "028",
        "gpts": "067",
        "gptd": "067",
        "gpats": "2.71",
        "gpatd": "2.71"
      },
       
]

const columnHeads= [
  "UNTS",
  "UNTD",
  "GPTS",
  "GPTD",
  "GPATS",
  "GPATD"
];
const ResultTableTwo = () => {
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
          {gpatd.map((item, i) => (
            <tr>

                <Tabledata >
           
                {item.unts}
              </Tabledata>
              <Tabledata >
             
                {item.untd}
              </Tabledata>

              <Tabledata >
                {item.gpts}
              </Tabledata>
              <Tabledata>
                {item.gptd}
              </Tabledata>
              <Tabledata >
                {item.gpats}
              </Tabledata>
                <Tabledata >
                {item.gpatd}
              </Tabledata>
            </tr>
          ))}
        </TableBody>
      </TableContainer>
      </MainTableContainer>
  )
}

export default ResultTableTwo


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
   
    //   borderCollapse: "collapse",
    padding: '16px', // Tailwind: p-4
    paddingLeft: '24px', // Tailwind: px-6
textAlign:"center",
    fontSize: '14px', // Tailwind: text-sm
     textTransform: "capitalize"


}));