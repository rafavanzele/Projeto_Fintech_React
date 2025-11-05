import './Despesas.css'
import Table from '../../components/Table/Table'
import { useNavigate } from 'react-router-dom'

const Despesas = () => {
  const navigate = useNavigate()

  return (
    <div className="despesas-container">
      <div className="table-wrap">
        <div className="table-title">💸 Despesas</div>
        <Table />

        <div className="btn-container">
          <button className="btn-editar">Editar</button>
          <button
            className="btn-cadastrar"
            onClick={() => navigate('/despesa/novo')}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Despesas
