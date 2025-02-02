import style from "./TransactionHistory.module.css";

const TransactionHistory = ({ list }) => {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th className={style.header}>Type</th>
          <th className={style.header}>Amount</th>
          <th className={style.header}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {list.map((item) => (
          <tr className={style.cell} key={item.id}>
            <td className={style.cell}>{item.type}</td>
            <td className={style.cell}>{item.amount}</td>
            <td className={style.cell}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
