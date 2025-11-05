import './Investimento.css'
import Table from '../../components/Table/Table'
import { useNavigate } from 'react-router-dom'

const Investimento = () => {
  const navigate = useNavigate()

  return (
    <div className="invest-container">
      <div className="table-wrap">
        <div className="table-title">📈 Investimentos</div>
        <Table />

        <div className="btn-container">
          <button className="btn-editar">Editar</button>
          <button
            className="btn-cadastrar"
            onClick={() => navigate('/investimento/novo')}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Investimento
