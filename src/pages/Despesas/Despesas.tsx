import './Despesas.css'
import Table from '../../components/Table/Table'
import Button from '../../components/Button/Button'

const Despesas = () => {
  return (
    <div className="despesas-container">
      <div className="table-wrap">
        <div className="table-title">💸 Despesas</div>

        <Table />

        <div className="btn-container">
          <Button />
        </div>
      </div>
    </div>
  )
}

export default Despesas
