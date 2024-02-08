import React from 'react'
import { Box, Button, Modal, styled } from "@mui/material";
import ResultPage from './ResultPage';
import html2pdf from 'html2pdf.js';
const ResultModal = ({useResult, open, close}) => {

      const handleDownload = () => {
    const resultPageElement = document.getElementById('result-page');
console.log(resultPageElement, "fhfhfh")
    if (resultPageElement) {
      const pdfOptions = {
        // margin: 10,
        filename: `${useResult.firstname}.pdf`,
        // image: { type: 'jpeg', quality: 0.98 },
        // html2canvas: { scale: 2 },
        // jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
         image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, width: resultPageElement.offsetWidth * 0.65, height: resultPageElement.offsetHeight * 1 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
      };
    html2pdf().from(resultPageElement).set(pdfOptions).save();
    }
  };
  return (
    <Modal open={open} onClose={close}>
          <ModalContainer>
            <ResultPage result={useResult} />
            <div style={{display:"flex", justifyContent:"flex-end"}}>
                <Button variant='contained' onClick={handleDownload}>Download</Button>
            </div>
             
          
          </ModalContainer>
        </Modal>
  )
}

export default ResultModal

const ModalContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  // padding:"0 40px",
  maxWidth: '80%',
  maxHeight:"80vh",
  overflowY:"scroll",
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'white',
  padding: '20px 40px',
  textAlign: 'center',
}));