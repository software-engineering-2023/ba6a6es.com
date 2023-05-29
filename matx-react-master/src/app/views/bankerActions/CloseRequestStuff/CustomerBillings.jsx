import { AttachMoney, Receipt } from '@mui/icons-material';
import {
  Button,
  Card,
  Divider,
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material';
import { FlexBetween } from 'app/components/FlexBox';
import { H4 } from 'app/components/Typography';

const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: '13px',
  color: theme.palette.text.primary,
  ':hover': { background: 'transparent' },
}));

const CustomerBillings = () => {
  return (
    <Card elevation={3}>
      <H4 sx={{ p: 2 }}>Account Details</H4>
      <Divider />

      <Table>
        <TableBody>
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
  { title: 'Account Number', value: '1107876543' },
  { title: 'Has Pending Payments', value: 'yes' },
  { title: 'Open Date', value: '20-9-2019' },
];

export default CustomerBillings;
