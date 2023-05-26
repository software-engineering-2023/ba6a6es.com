import React from "react";

const BankAccountDetails = () => {
  const bankAccountData = {
    accountNumber: "1234567890",
    accountHolderName: "John Doe",
    balance: 5000,
    currency: "USD",
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
      <h2>Bank Account Information</h2>
      <p>Account Number: {bankAccountData.accountNumber}</p>
      <p>Account Holder Name: {bankAccountData.accountHolderName}</p>
      <p>Balance: {bankAccountData.balance} {bankAccountData.currency}</p>

      <h3>Last Transactions:</h3>
      <ul>
        {bankAccountData.lastTransactions.map((transaction) => (
          <li key={transaction.id}>
            <p>Date: {transaction.date}</p>
            <p>Description: {transaction.description}</p>
            <p>Amount: {transaction.amount} {bankAccountData.currency}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BankAccountDetails;
