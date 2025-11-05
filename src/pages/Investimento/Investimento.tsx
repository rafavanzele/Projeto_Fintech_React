
import './Investimento.css'
import Table from '../../components/Table/Table'
import Button from '../../components/Button/Button'

const Investimento = () => {
  return (
    <div className="invest-container">
      <div className="table-wrap">
        <div className="table-title">📈 Investimentos</div>
        <Table />
        <div className="btn-container">
          <Button />
        </div>
      </div>
    </div>
  )
}

export default Investimento
