import React from 'react';
import { SimpleCard } from 'app/components';
import { H1, H2, Paragraph, Span } from 'app/components/Typography';

function HandleOpenRequest() {
  return (
    <div style={{ overflow: 'auto', maxHeight: '500px' }}>
      <SimpleCard>
        <H1 style={{ color: '#0072A2', fontWeight: 'bold', marginBottom: '30px' }}>
          Opening BankAccount Request
        </H1>
        <H2 style={{ marginBottom: '30px' }}>Personal Info</H2>
        <Paragraph style={{ marginBottom: '50px' }}>
          <Span>
            <H1 style={{ color: '#0072A2', fontWeight: 'bold', marginBottom: '15px' }}>Name:</H1>
            Shoroq Abdulraof
            <H1 style={{ color: '#0072A2', fontWeight: 'bold', marginBottom: '15px' }}>
              NationalID:
            </H1>
            302045345676980
            <H1 style={{ color: '#0072A2', fontWeight: 'bold', marginBottom: '15px' }}>Age:</H1>
            20
            <H1 style={{ color: '#0072A2', fontWeight: 'bold', marginBottom: '15px' }}>
              phone number:
            </H1>
            0100000565665
            <H1 style={{ color: '#0072A2', fontWeight: 'bold', marginBottom: '15px' }}>mail:</H1>
            shrouqshar@gmail.com
            <H1 style={{ color: '#0072A2', fontWeight: 'bold', marginBottom: '15px' }}>OtherL:</H1>2
          </Span>
        </Paragraph>

        <H2 style={{ marginBottom: '30px' }}>What is the minimum balance required?</H2>
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
