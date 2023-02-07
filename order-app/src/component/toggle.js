import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Toggle({ name, content, id, children }) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>뎁스1</Typography>
        </AccordionSummary>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>뎁스1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>뎁스2</Typography>
            </AccordionDetails>
          </Accordion>
      </Accordion>
    </div>
  );
}

export const OrderList = () => {
  return <div></div>;
};
