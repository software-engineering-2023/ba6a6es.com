import { LockOpen, Person } from '@mui/icons-material';
import {
  Avatar,
  Button,
  Card,
  Divider,
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import { FlexBetween, FlexBox } from 'app/components/FlexBox';
import { H4, Small } from 'app/components/Typography';

const ContentBox = styled(FlexBox)({
  alignItems: 'center',
  flexDirection: 'column',
});

const StyedSmall = styled(Small)({
  color: '#08ad6c',
  padding: '2px 4px',
  borderRadius: '4px',
  background: 'rgba(9, 182, 109, 0.15)',
  fontSize: '12px',
});

const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: '13px',
  color: theme.palette.text.primary,
  ':hover': { background: 'transparent' },
}));

const CustomerInfo = () => {
  return (
    <Card sx={{ pt: 3 }} elevation={3}>
      <ContentBox mb={3} alignContent="center">
        <Small color="text.primary">Holder Details</Small>
        {/* <H4 sx={{ mt: '16px', mb: '8px' }}>Shar Abdulraof</H4> */}
      </ContentBox>

      <Divider />

      <Table>
        <TableBody>
          <TableRow>
            <TableCell sx={{ pl: 2 }}>Name</TableCell>
            <TableCell>
              <div>Shar Abdulraof</div>
            </TableCell>
          </TableRow>

          <TableRow>
            <TableCell sx={{ pl: 2 }}>Email</TableCell>
            <TableCell>
              <div>shrouq@example.com</div>
              <StyedSmall>Email Verified</StyedSmall>
            </TableCell>
          </TableRow>

          {customerInfo.map((item, ind) => (
            <TableRow key={ind}>
              <TableCell sx={{ pl: 2 }}>{item.title}</TableCell>
              <TableCell>{item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

const customerInfo = [
  { title: 'Phone', value: '01234567890' },
  { title: 'Country', value: 'Egypt' },
  { title: 'State/Region', value: 'Cairo' },
  { title: 'Address 1', value: '123 Main St' },
  { title: 'Address 2', value: 'House #14' },
];

export default CustomerInfo;
