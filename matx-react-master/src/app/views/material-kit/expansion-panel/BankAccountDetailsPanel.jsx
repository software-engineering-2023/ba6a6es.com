import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SourceIcon from "@mui/icons-material/Source";

const AccordionRoot = styled("div")(({ theme }) => ({
  width: "100%",
  "& .heading": {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const handleIconClick = () => {
  // setShowBankAccountDetails(true);
};

export default function SimpleExpansionPanel() {
  return (
    <AccordionRoot>
      <Accordion>
        <AccordionSummary
          id="panel1a-header"
          expandIcon={
            <IconButton onClick={handleIconClick}>
              <SourceIcon color="primary" align="center" />
            </IconButton>
          }
          aria-controls="panel1a-content"
        ></AccordionSummary>

        <AccordionDetails>
          <Typography>
            This account was opened at the main branch in Downtown Cairo.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </AccordionRoot>
  );
}
