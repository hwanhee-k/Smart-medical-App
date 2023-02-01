import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function Toggle({name,content,id}) {
    console.log(name,content,id);
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography name={name} content={content} id={id}>
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}


export const OrderList = () => {

    return(
        <div></div>
    );
}