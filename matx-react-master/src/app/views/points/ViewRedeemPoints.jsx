import React, { useState } from 'react';
import { Container, Box, styled } from '@mui/system';
import { Breadcrumb, SimpleCard } from 'app/components';
import { Stack } from '@mui/material';
import CouponGrid from 'app/components/PointsComponents/CouponGrid';

const ViewRedeemPoints = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: 'Points' }]} />
      </Box>
      <Stack spacing={3}>
        <SimpleCard title="Redeemable Coupons">
          <CouponGrid
            couponDescriptions={[
              'Get 10% off your next purchase',
              'Free shipping on your next order',
              'Buy one, get one free on all items',
              'Get a $10 gift card with your purchase',
              '20% off your entire purchase',
              'Get a free accessory with your purchase',
              'Buy two items, get the third item 50% off',
              'Get a free product with your purchase',
              '15% off your next purchase',
            ]}
            icons={[
              '3d_rotation',
              'ac_unit',
              'access_alarm',
              'access_alarms',
              'access_time',
              'accessibility',
              'accessible',
              'account_balance',
              'account_balance_wallet',
            ]}
            prices={[10, 20, 30, 40, 50, 60, 70, 80, 90]}
          />
        </SimpleCard>
      </Stack>
    </Container>
  );
};

export default ViewRedeemPoints;
