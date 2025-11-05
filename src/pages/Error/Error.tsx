import './Error.css'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-card">
        <h1 className="error-title">404</h1>
        <p className="error-message">Ops! Página não encontrada.</p>
        <p className="error-subtext">
          Parece que você se perdeu...
        </p>

        <Link to="/" className="btn-voltar">
          Voltar para a Home
        </Link>
      </div>
    </div>
  )
}

export default Error
