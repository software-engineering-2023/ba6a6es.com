import React from "react";
import { Paragraph, H2, H3 } from "app/components/Typography";

const BankAccountDetails = () => {
  const bankAccountData = {
    // accountNumber: '1234567890',
    // accountHolderName: 'John Doe',
    // balance: 5000,
    // currency: 'USD',
    lastTransactions: [
      {
        id: 1,
        date: "2023-05-25",
        description: "Supermarket",
        amount: -50,
      },
      {
        id: 2,
        date: "2023-05-24",
        description: "Salary Deposit",
        amount: 2000,
      },
      {
        id: 3,
        date: "2023-05-22",
        description: "Restaurant",
        amount: -80,
      },
    ],
  };

  return (
    <div>
      {/* <H2>Bank Account Information</H2>
      <Paragraph>Account Number: {bankAccountData.accountNumber}</Paragraph>
      <Paragraph>Account Holder Name: {bankAccountData.accountHolderName}</Paragraph>
      <Paragraph>
        Balance: {bankAccountData.balance} {bankAccountData.currency}
      </Paragraph> */}

      <H3>Last Transactions:</H3>
      <ul>
        {bankAccountData.lastTransactions.map((transaction) => (
          <li key={transaction.id}>
            <Paragraph>Date: {transaction.date}</Paragraph>
            <Paragraph>Description: {transaction.description}</Paragraph>
            <Paragraph>
              Amount: {transaction.amount} {bankAccountData.currency}
            </Paragraph>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BankAccountDetails;
