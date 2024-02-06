import React from 'react';
import { saveAs } from 'file-saver';
import { IC_logo, IC_passport } from '../assets/images';
import { Box, Typography, styled } from '@mui/material';
const ResultPage = ({ results }) => {
  
    const downloadResults = () => {
    const blob = new Blob([document.getElementById('result-page').outerHTML], {
      type: 'text/html',
    });
    saveAs(blob, 'student_results.html');
  };
  return (
    <div style={{background:"#F2F2F2", width:"100%", alignItems:"center", display:"flex", justifyContent:"center"}}>
  <MainContainer>
       <HeaderContainer>

  
      <img src={IC_logo} maxWidth="100px" height="100px" alt='logo'/>
     

      <HeaderTextsContainer>

      <HeaderText1>

        FREMONT  COLLEGE OF EDUCATION
      </HeaderText1>
      <HeaderText2>No.5 Raymond Osuman Street, PMB 2191 Maitama, Abuja, Nigeria.</HeaderText2>
      <HeaderText3>

        Post Graduate Diploma in Education
      </HeaderText3>
      <HeaderText4>Student First Semester Statement Of Result</HeaderText4>
      </HeaderTextsContainer>

      
       <img src={IC_passport} maWidth="100px" height="100px" alt='logo'/>
    
    </HeaderContainer>
<DetailsContainer


>

      <DetailsItemContainer>
<DetailsItem>Name: <span>Chuckma James Nnamdi</span></DetailsItem>

      <DetailsItem>Level: <span>100 Level</span></DetailsItem>
    </DetailsItemContainer>
    <DetailsItemContainer>

      <DetailsItem>Reg. No: <span>FCE/PGDE/2021/002</span></DetailsItem>
      <DetailsItem>Session: <span>2022/2023 Session</span></DetailsItem>
    </DetailsItemContainer>
</DetailsContainer>

    </MainContainer>

    </div>
  
 
    
    // <div>
    //  <h1>Student Results</h1>
    //   <button onClick={downloadResults}>Download Results</button>
    // <div id="result-page">
    // <table>
    //     <thead>
    //       <tr>
    //         <th>Student Name</th>
    //         <th>Subject</th>
    //         <th>Score</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {results.map((result, index) => (
    //         <tr key={index}>
    //           <td>{result.studentName}</td>
    //           <td>{result.subject}</td>
    //           <td>{result.score}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table><div/>

    // </div>
     
   
    // </div>
  );
};

export default ResultPage;


const  HeaderContainer= styled(Box)(({ theme }) => ({
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
  
    padding:"20px",
    marginBottom:"50px"
}));

const  HeaderTextsContainer= styled(Box)(({ theme }) => ({
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    marginBottom:"50px",
    rowGap:"10px"
   

}));

const  MainContainer= styled(Box)(({ theme }) => ({
width:"50%",
padding:"20px",
  background:"#ffffff",

}));


const  DetailsContainer= styled(Typography)(({ theme }) => ({
  // width:"100%",
    display:"flex",
        justifyContent:"space-between",
    flexDirection:"row",
    marginBottom:"50px",
}));

const  DetailsItemContainer= styled(Typography)(({ theme }) => ({
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    rowGap:"15px"
}));

const  DetailsItem= styled(Typography)(({ theme }) => ({
  // width:"50%",
  display:"flex",
    flexDirection:"row",
    columnGap:"20px",
   color:"#000000",
 fontWeight:700,
 fontSize:"16px",
 lineHeight:"14.4px",
    '& span': {
   fontWeight:500,


    },
}));

const  HeaderText1= styled(Typography)(({ theme }) => ({
 color:"#4F4F4F",
 fontWeight:700,
 fontSize:"16px",
 lineHeight:"19.2px"
}));
const  HeaderText2= styled(Typography)(({ theme }) => ({
 color:"#4F4F4F",
 fontWeight:400,
 fontSize:"12px",
 lineHeight:"14.4px",
 width:"70%",
 textAlign:"center"
}));

const  HeaderText3= styled(Typography)(({ theme }) => ({
 color:"#333333",
 fontWeight:600,
 fontSize:"20px",
 lineHeight:"24px",
//  width:"70%",
//  textAlign:"center"
}));

const  HeaderText4= styled(Typography)(({ theme }) => ({
 color:"#333333",
 fontWeight:600,
 fontSize:"12px",
 lineHeight:"14.4px",
//  width:"70%",
//  textAlign:"center"
}));




