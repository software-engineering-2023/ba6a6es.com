import { Stack } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import MakeRegionalBankTransferForm from "app/views/material-kit/forms/MakeRegionalBankTransferForm";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const MakeRegionalBankTransfer = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: "Bank Transfer", path: "" },
            { name: "Regional Account" },
          ]}
        />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="">
          <MakeRegionalBankTransferForm />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default MakeRegionalBankTransfer;
