import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, CardContent, CardMedia, Icon } from '@mui/material';
import { Paragraph, H6 } from '../Typography';

const CouponBox = ({ couponDescription, iconName, price, onRedeem }) => {
  const handleRedeem = () => {
    onRedeem(price);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={`./CouponIcons/${iconName}.svg`} // TODO : put pictures
        sx={{ alignSelf: 'center' }}
      />
      <CardContent>
        <H6 gutterBottom variant="h5" component="div">
          {couponDescription}
        </H6>
        <Paragraph variant="body2" color="text.secondary">
          Price: {price} points
        </Paragraph>
        <Button variant="contained" onClick={handleRedeem}>
          Redeem
        </Button>
      </CardContent>
    </Card>
  );
};

CouponBox.propTypes = {
  couponDescription: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onRedeem: PropTypes.func.isRequired,
};

export default CouponBox;
