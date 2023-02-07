import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";

const Root = styled.div`
  width: 100%;
`;

const Heading = styled(Typography)`
  font-size: 1rem;
  font-weight: 400;
`;

function NestedAccordion() {
  const [expanded, setExpanded] = useState(false);
  const [nestedExpanded, setNestedExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleNestedChange = (event, isExpanded) => {
    setNestedExpanded(isExpanded ? "nestedPanel1" : false);
  };

  return (
    <Root>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Heading>Accordion 1</Heading>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion
            expanded={nestedExpanded === "nestedPanel1"}
            onChange={handleNestedChange}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="nestedPanel1bh-content"
              id="nestedPanel1bh-header"
            >
              <Heading>Nested Accordion 1</Heading>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </Root>
  );
}

export default NestedAccordion;
