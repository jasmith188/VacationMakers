import React, { useContext } from 'react';
import { BudgetTransaction } from "../BudgetTransaction/index";

import { GlobalContext } from '../../context/GlobalState';

export const BudgetTransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<BudgetTransaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}

export default BudgetTransactionList