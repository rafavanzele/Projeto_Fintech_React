import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/despesa" className="nav-link">Despesa</Link>
        <Link to="/investimento" className="nav-link">Investimento</Link>
      </nav>
    </header>
  )
}

export default Header
