// локальні імпорти
import React from 'react';
import s from './transaction.module.css';

const tableStyle = s.tableStyle
const thead = s.thead
const tbodyStyle = s.tbodyStyle
const tdStyle = s.tdStyle


const Transaction = ({ transactionData }) => {
  return (
    <table className={tableStyle}>
      <thead className={thead}>
         <th colSpan="3">Transacton History</th>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={tbodyStyle}>
        {transactionData.map(oneTransaction => (
          <tr key={oneTransaction.id}>
            <td className={tdStyle}>{oneTransaction.type}</td>
            <td className={tdStyle}>{oneTransaction.amount}</td>
            <td className={tdStyle}>{oneTransaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Transaction;
