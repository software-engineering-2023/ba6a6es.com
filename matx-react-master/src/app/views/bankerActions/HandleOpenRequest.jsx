import React from 'react';
import { SimpleCard } from 'app/components';
import { Card } from '@mui/material';
import { H1, H2, Paragraph, Span } from 'app/components/Typography';

function HandleOpenRequest() {
  return (
    <div style={{ overflow: 'auto', maxHeight: '500px' }}>
      <SimpleCard>
        <H1 style={{ color: '#0072A2', fontWeight: 'bold', marginBottom: '10px' }}>
          Opening BankAccount Request
        </H1>
        <H2 style={{ marginBottom: '10px' }}>Personal Info</H2>
        <Paragraph style={{ marginBottom: '10px' }}>
          <Span>
            <Card>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <H2 style={{ color: '#0072A2', fontWeight: 'bold', marginRight: '10px' }}>Name:</H2>
                Shoroq Abdulraof
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <H2 style={{ color: '#0072A2', fontWeight: 'bold', marginRight: '10px' }}>
                  Nat.Id:
                </H2>
                30206767898546
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <H2 style={{ color: '#0072A2', fontWeight: 'bold', marginRight: '10px' }}>Age:</H2>
                20
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <H2 style={{ color: '#0072A2', fontWeight: 'bold', marginRight: '10px' }}>
                  Phone num:
                </H2>
                010657879543
              </div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '50px' }}>
                <H2 style={{ color: '#0072A2', fontWeight: 'bold', marginRight: '10px' }}>
                  Email:
                </H2>
                shrouqshar@gmail.com
              </div>
            </Card>
          </Span>
        </Paragraph>

        <H2 style={{ marginBottom: '30px' }}>Financial Status</H2>
        <Paragraph style={{ marginBottom: '50px' }}>
          <Span>
            The minimum balance required for a savings account is{' '}
            <Span style={{ fontWeight: 'bold' }}>$1000</Span>.
          </Span>
        </Paragraph>

        <H2 style={{ marginBottom: '30px' }}>How do I reset my password?</H2>
        <Paragraph style={{ marginBottom: '50px' }}>
          <Span>
            You can reset your password by clicking on the "Forgot Password" link on the login page
            and following the instructions.
          </Span>
        </Paragraph>

        <H2 style={{ marginBottom: '30px' }}>What is the interest rate for loans?</H2>
        <Paragraph style={{ marginBottom: '50px' }}>
          <Span>
            The interest rate for loans varies depending on the type of loan and your credit score.
            Please contact one of our loan officers for more information.
          </Span>
        </Paragraph>

        <H2 style={{ marginBottom: '30px' }}>How do I apply for a loan?</H2>
        <Paragraph style={{ marginBottom: '50px' }}>
          <Span>
            You can apply for a loan by visiting one of our branches or by filling out an online
            application form on our website.
          </Span>
        </Paragraph>

        <H2 style={{ marginBottom: '30px' }}>
          What is the maximum amount I can withdraw from an ATM?
        </H2>
        <Paragraph style={{ marginBottom: '50px' }}>
          <Span>
            The maximum amount you can withdraw from an ATM is{' '}
            <Span style={{ fontWeight: 'bold' }}>$500</Span> per day.
          </Span>
        </Paragraph>
      </SimpleCard>
    </div>
  );
}

export default HandleOpenRequest;
