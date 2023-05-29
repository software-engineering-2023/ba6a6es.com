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
        <Avatar sx={{ width: 84, height: 84 }} src="/assets/images/faces/10.jpg" />
        <H4 sx={{ mt: '16px', mb: '8px' }}>Ahmed Mohamed</H4>
        <Small color="text.secondary">Computer Scientist</Small>
      </ContentBox>

      <Divider />

      <Table>
        <TableBody>
          {/* <TableRow>
            <TableCell sx={{ pl: 2 }}>Email</TableCell>
            <TableCell>
              <div>ui-lib@example.com</div>
              <StyedSmall>Email Verified</StyedSmall>
            </TableCell>
          </TableRow> */}

          {customerInfo.map((item, ind) => (
            <TableRow key={ind}>
              <TableCell sx={{ pl: 2 }}>{item.title}</TableCell>
              <TableCell>{item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <FlexBetween p={2}>
        <StyledButton disableRipple startIcon={<LockOpen fontSize="small" />}>
          Reset & Send Password
        </StyledButton>

        <StyledButton disableRipple startIcon={<Person fontSize="small" />}>
          Login as Customer
        </StyledButton>
      </FlexBetween>
    </Card>
  );
};

const customerInfo = [
  { title: 'Phone', value: '01236565798' },
  { title: 'mail', value: 'ahmed@gmail.com' },
  { title: 'Country', value: 'Egypt' },
  { title: 'City', value: 'Cairo' },
  { title: 'CreditScore', value: '12300' },
  { title: 'Address 1', value: 'AlRehab, Group99' },
  { title: 'Address 2', value: 'Almokattam,St.9' },
];

export default CustomerInfo;
