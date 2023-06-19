import css from './Th.module.css'
const TransactionHistory = ({ items }) => 
{
    return (
        <>
        <table className={css.transactionHistory}> 
            <thead>
                <tr >
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
                </thead>
                <tbody >
            {items.map(item => ( 
        <tr key={item.id}>
            <td className={css.tdType}>{item.type}</td>
            <td className={css.tdType}>{item.amount}</td>
            <td className={css.tdType}>{item.currency}</td>
        </tr>
            ))}
                </tbody>
        </table>
        </>
    )
}
export default TransactionHistory;