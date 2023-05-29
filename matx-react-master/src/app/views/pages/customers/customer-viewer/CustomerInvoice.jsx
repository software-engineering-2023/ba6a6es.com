import {
  Card,
  Fade,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { H3, Small } from 'app/components/Typography';
import { format } from 'date-fns';

const StyledCell = styled(TableCell)({
  paddingTop: '4px',
  paddingBottom: '4px',
  textTransform: 'capitalize',
});

const StyedSmall = styled(Small)(({ theme, status }) => ({
  color: '#fff',
  padding: '2px 8px',
  borderRadius: '4px',
  background: status === 'paid' ? '#08ad6c' : status === 'unpaid' && theme.palette.error.main,
}));

const CustomerInvoice = () => {
  return (
    <Fade in timeout={300}>
      <Card elevation={3} sx={{ width: '100%', overflow: 'auto' }}>
        <H3 sx={{ p: 2, pb: 0 }}>Other Credit Cards/Loans</H3>

        <Table sx={{ minWidth: 1050 }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ pl: 2 }} colSpan={2}>
                No.
              </TableCell>
              <TableCell colSpan={2}>Type</TableCell>
              <TableCell colSpan={3}>id</TableCell>
              <TableCell colSpan={1}>Description</TableCell>
              {/* <TableCell colSpan={1}>Total</TableCell> */}
              <TableCell colSpan={1}>Status</TableCell>
              {/* <TableCell colSpan={1}>Action</TableCell> */}
            </TableRow>
          </TableHead>

          <TableBody>
            {invoiceList.map((invoice, index) => (
              <TableRow key={invoice._id}>
                <StyledCell align="left" colSpan={2} sx={{ pl: 2 }}>
                  #{invoice._id}
                </StyledCell>

                {/* <StyledCell align="left" colSpan={2}>
                  {format(new Date(invoice.date), "dd MMM, yyyy | hh:mm aa")}
                </StyledCell> */}

                <StyledCell align="left" colSpan={3}>
                  {invoice.type}
                </StyledCell>

                <StyledCell align="left" colSpan={1}>
                  {invoice.id}
                </StyledCell>

                <StyledCell align="left" colSpan={1}>
                  <StyedSmall Description={invoice.Description}>{invoice.Description}</StyedSmall>
                </StyledCell>

                <StyledCell colSpan={1}>
                  <StyedSmall status={invoice.status}>{invoice.status}</StyedSmall>
                </StyledCell>

                {/* <StyledCell colSpan={1}>
                  <IconButton>
                    <Icon>arrow_right_alt</Icon>
                  </IconButton>
                </StyledCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Fade>
  );
};

const invoiceList = [
  {
    _id: '1',
    // date: new Date(),
    type: 'CreditCard',
    id: '4536***********9876',
    description: '2020-2022',
    status: 'unactive',
  },
  {
    _id: '2',
    // date: new Date(),
    type: 'Loan',
    id: 'loan#122234',
    description: '2021-2026',
    status: 'active',
  },
  {
    _id: '3',
    // date: new Date(),
    type: 'CreditCard',
    id: '3334***********9876',
    description: '2020-present',
    status: 'active',
  },
];
export default CustomerInvoice;
