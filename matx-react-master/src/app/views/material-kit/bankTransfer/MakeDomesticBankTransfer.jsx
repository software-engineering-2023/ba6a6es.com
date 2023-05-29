import { Stack } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import MakeDomesticBankTransferForm from "app/views/material-kit/forms/MakeDomesticBankTransferForm";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));
const MakeDomesticBankTransfer = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          routeSegments={[
            { name: "Bank Transfer", path: "" },
            { name: "Domestic Account" },
          ]}
        />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="">
          <MakeDomesticBankTransferForm />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default MakeDomesticBankTransfer;
