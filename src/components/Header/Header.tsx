import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <a href="/" className="nav-link">Home</a>
                <a href="/despesa" className="nav-link">Despesa</a>
                <a href="/investimento" className="nav-link">Investimento</a>
            </nav>
        </header>
    )
}

export default Header