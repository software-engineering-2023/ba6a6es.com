import { KeyboardArrowDown } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  Grid,
  Stack,
  Switch,
  TextField,
} from '@mui/material';
import { H5, Paragraph } from 'app/components/Typography';
import CurrentUserType from 'app/CurrentUserType';

const Preferences = () => {
  return (
    <Card>
      <H5 padding={3}>General Preferences</H5>
      <Divider />

      <Box padding={3}>
        <Grid container spacing={4}>
          <Grid item sm={6} xs={12}>
            <TextField
              select
              fullWidth
              label="Language"
              variant="outlined"
              placeholder="Language"
              // value="english"
              SelectProps={{ native: true, IconComponent: KeyboardArrowDown }}
            >
              <option value="english">English</option>
              <option value="Arabic">Arabic</option>
              <option value="German">German</option>
            </TextField>
          </Grid>
          <Grid item sm={6} xs={12}></Grid>

          <Grid item sm={6} xs={12}>
            <TextField
              select
              fullWidth
              label="Currency"
              variant="outlined"
              placeholder="Currency"
              // value="USD"
              SelectProps={{ native: true, IconComponent: KeyboardArrowDown }}
            >
              <option value="USD">USD</option>
              <option value="EGP">EGP</option>
              <option value="EUR">EUR</option>
            </TextField>
          </Grid>
          <Grid item sm={6} xs={12}></Grid>

          {CurrentUserType.getUserType() === 'client' && (
            <Grid item sm={6} xs={12}>
              <TextField
                select
                fullWidth
                label="Default Account"
                variant="outlined"
                placeholder="Default Account"
                // value="Checkings"
                SelectProps={{ native: true, IconComponent: KeyboardArrowDown }}
              >
                <option value="Checkings">Checkings</option>
                <option value="Savings">Savings</option>
                <option value="Credit">Credit</option>
              </TextField>
            </Grid>
          )}
        </Grid>
      </Box>

      <Stack direction="row" spacing={3} padding={3}>
        <Button variant="outlined" component={Link} to="/settings/PasswordPage">
          Change Password
        </Button>
      </Stack>

      <Stack direction="row" spacing={3} padding={3}>
        <Button variant="contained">Save Changes</Button>
        <Button variant="outlined">Cancel</Button>
      </Stack>
    </Card>
  );
};

export default Preferences;
