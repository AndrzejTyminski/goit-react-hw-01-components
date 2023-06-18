import './Th.css'
const TransactionHistory = ({ items }) => 
{
    return (
        <>
        <table className='transaction-history'> 
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
            <td className='td-type'>{item.type}</td>
            <td className='td-type'>{item.amount}</td>
            <td className='td-type'>{item.currency}</td>
        </tr>
            ))}
                </tbody>
        </table>
        </>
    )
}
export default TransactionHistory;