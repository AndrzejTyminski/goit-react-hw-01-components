import th from './transactions.json'
import './Th.css'
export const TransactionHistory = (  ) => 
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
            {th.map(({ id, type, amount, currency }) => ( 
        <>
        <tr key={id}>
            <td className='td-type'>{type}</td>
            <td className='td-type'>{amount}</td>
            <td className='td-type'>{currency}</td>
        </tr>
        </>
            ))}
                </tbody>
        </table>
        </>
    )
}