import { Check, Cancel } from '@mui/icons-material';
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

const CreditInfo = () => {
  return (
    <Card sx={{ pt: 3 }} elevation={3}>
      <ContentBox mb={3} alignContent="center">
        {/* <H4 sx={{ mt: '16px', mb: '8px' }}>Ben Peterson</H4> */}
        <Small color="text.primary">Income Details</Small>
      </ContentBox>

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
  { title: 'Job', value: 'Software Engineer' },
  { title: 'Yearly Income', value: 'EGP 100000' },
  { title: 'Credit Score', value: '620' },
  { title: 'Credit Category', value: 'fair' },
];

export default CreditInfo;
