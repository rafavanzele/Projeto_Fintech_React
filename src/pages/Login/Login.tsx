import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault() // evita o recarregamento da página

    // futuramente aqui você vai validar o login com o backend
    console.log('Login realizado!')

    // redireciona para a página inicial
    navigate('/')
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Acesse sua conta</h1>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu e-mail"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha"
              required
            />
          </div>

          <button type="submit" className="btn-login">
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
