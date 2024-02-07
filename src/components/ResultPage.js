import React from 'react';

import { IC_logo, IC_passport } from '../assets/images';
import { Box, Typography, styled } from '@mui/material';
import ResultTableOne from './tables/ResultTableOne';
import ResultTableTwo from './tables/ResultsTableTwo';
const ResultPage = ({ result }) => {



  
  
  return (
  <div style={{width:"100%" , padding:"20px" ,background:"#ffffff"}} id="result-page" >
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
<DetailsItem>Name: <span>{result?.surname +" "+ result?.firstname  }</span></DetailsItem>

      <DetailsItem>Level: <span>{result?.level}</span></DetailsItem>
    </DetailsItemContainer>
    <DetailsItemContainer>

      <DetailsItem>Reg. No: <span>FCE/PGDE/2021/002</span></DetailsItem>
      <DetailsItem>Session: <span>2022/2023 Session</span></DetailsItem>
    </DetailsItemContainer>
</DetailsContainer>

<ResultTableOne/>

<ResultTableTwo/>

<Remarks>Remarks: <span>Pass</span> </Remarks>

<Registrar>
  Registrar
</Registrar>

    </div>

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
    textTransform: "capitalize"


    },
}));

const  Remarks= styled(Typography)(({ theme }) => ({
   color:"#000000",
 fontWeight:500,
 fontSize:"12px",
 lineHeight:"14.4px",
 marginBottom:"120px",
    '& span': {
   fontWeight:500,
   color:"#0D7590"


    },
}));

const  HeaderText1= styled(Typography)(({ theme }) => ({
 color:"#4F4F4F",
 fontWeight:700,
 fontSize:"16px",
 lineHeight:"19.2px"
}));

const  Registrar= styled(Typography)(({ theme }) => ({
 color:"#333333",
 fontWeight:400,
 fontSize:"12px",
 lineHeight:"14.4px",
 borderTop:"1px solid #000000",
 padding:"15px",
 width:"20%"
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




