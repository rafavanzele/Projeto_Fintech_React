import './Table.css'

const Table = () => {
    return (
        <div className="table-wrap">

            <div className="table-title">
                💸 Despesas
            </div>

            <table className="fin-table">
                <thead>
                    <tr>
                        <th>Receita</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Receita 1</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>Receita 2</td>
                        <td>2000</td>
                    </tr>
                    <tr>
                        <td>Receita 3</td>
                        <td>3000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table
