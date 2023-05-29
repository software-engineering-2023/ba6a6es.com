import { Card, Grid, styled, useTheme, Button } from "@mui/material";
import { Fragment } from "react";

import { Span } from "app/components/Typography";
import Icon from "@mui/material";
import CreditTransactionTable from "../tables/CreditTransactionTable";
import { Box } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const CreditCardTransactions = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: "Credit Cards", path: "" },
            { name: "Transactions" },
          ]}
        />
      </Box>
      <Card sx={{ px: 3, py: 2, mb: 3 }}>
        <CreditTransactionTable
          subscribarList={[
            {
              cardNumber: "4916 0919 7731 0972",
              icon: "arrow_downward",
              date: "18-05-2023",
              amount: "EGP1000",
              type: "Purchase",
              transNumber: "54D879E56",
              account: "Water Company",
            },
            {
              cardNumber: "5160 1678 8088 3410",
              icon: "arrow_downward",
              date: "18-05-2023",
              amount: "EGP5000",
              type: "Withdrawal",
              transNumber: "632R65G32",
              account: "ATM",
            },
            {
              cardNumber: "5160 1678 8088 3410",
              icon: "arrow_downward",
              date: "16-05-2023",
              amount: "EGP500",
              type: "Purchase",
              transNumber: "5A84345T6",
              account: "Gas Company",
            },
            {
              cardNumber: "4916 9624 9155 8215",
              icon: "arrow_downward",
              date: "10-05-2023",
              amount: "EGP1050",
              type: "Purchase",
              transNumber: "4233FF456",
              account: "Carefour",
            },
            {
              cardNumber: "5381 3176 8117 7024",
              icon: "arrow_upward",
              date: "09-05-2023",
              amount: "EGP2400",
              type: "Refund",
              transNumber: "542K345D6",
              account: "Amazon.com",
            },
            {
              cardNumber: "4916 0919 7731 0972",
              icon: "arrow_downward",
              date: "20-05-2023",
              amount: "EGP400",
              type: "Purchase",
              transNumber: "2K345H5D6",
              account: "Internet Company",
            },
            {
              cardNumber: "5160 1678 8088 3410",
              icon: "arrow_upward",
              date: "02-05-2023",
              amount: "EGP300",
              type: "Refund",
              transNumber: "3D3M495D6",
              account: "ZARA",
            },
          ]}
        />
      </Card>
    </Container>
  );
};

export default CreditCardTransactions;
