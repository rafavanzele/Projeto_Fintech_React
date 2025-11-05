import './Table.css'

const Table = () => {
  return (
    <table className="fin-table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Conta de Luz</td>
          <td>R$ 250,00</td>
        </tr>
        <tr>
          <td>Internet</td>
          <td>R$ 120,00</td>
        </tr>
        <tr>
          <td>Aluguel</td>
          <td>R$ 1.500,00</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Table
