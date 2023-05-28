import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import CouponBox from './CouponBox';
import { Paragraph, H5, H3, H1 } from '../Typography';

const CouponGrid = ({ couponDescriptions, icons, prices }) => {
  const [points, setPoints] = useState(1000);

  const handleRedeem = (price) => {
    setPoints((prevPoints) => prevPoints - price);
  };

  return (
    <>
      <H1 sx={{ textAlign: 'right' }} gutterBottom>
        Total Points: {points}
      </H1>
      <Grid container spacing={2}>
        {icons.map((icon, index) => (
          <Grid item xs={4} key={index}>
            <CouponBox
              iconName={icon}
              price={parseInt(prices[index])}
              couponDescription={couponDescriptions[index]}
              onRedeem={handleRedeem}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

CouponGrid.propTypes = {
  couponDescriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  icons: PropTypes.arrayOf(PropTypes.string).isRequired,
  prices: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default CouponGrid;
