import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({items})=>{
    return(
        <table className={css.transactionHistory}>
            <thead className={css.head}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({id,type,amount,currency})=>(
                        <tr key={id} className={css.row}>
                            <td className={css.column}>{type}</td>
                            <td className={css.column}>{amount}</td>
                            <td className={css.column}>{currency}</td>
                        </tr>
                ))}              
              
            </tbody>
        </table>
    )
}