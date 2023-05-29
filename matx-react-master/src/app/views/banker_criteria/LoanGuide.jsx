import React from 'react';
import { SimpleCard } from 'app/components';
import { H1, H2, Paragraph, Span } from 'app/components/Typography';

function LoanGuide() {
  return (
    <div style={{ overflow: 'auto', maxHeight: '500px' }}>
      <SimpleCard>
        <H1 style={{ color: '#0072A2', fontWeight: 'bold', marginBottom: '30px' }}>Loan Guide</H1>
        <H2 style={{ marginBottom: '30px' }}>How do I open an account?</H2>
        <Paragraph style={{ marginBottom: '50px' }}>
          <Span>
            You can open an account by visiting one of our branches or by filling out an online
            application form on our website.
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

export default LoanGuide;
