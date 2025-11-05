import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'

// páginas
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Despesas from './pages/Despesas/Despesas'
import Investimento from './pages/Investimento/Investimento'
import Error from './pages/Error/Error'
import CadastrarDespesas from './pages/CadastrarDespesas/CadastrarDespesas'
import CadastrarInvestimento from './pages/CadastrarInvestimento/CadastrarInvestimento'

// estilos globais
import './index.css'
import './App.css'

function AppContent() {
  const location = useLocation()
  const hideHeader = location.pathname === '/login'

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>

        <Route path="/" element={<Navigate to="/login" />} />

        {/* páginas principais */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/despesa" element={<Despesas />} />
        <Route path="/investimento" element={<Investimento />} />
        <Route path="/despesa/novo" element={<CadastrarDespesas />} />
        <Route path="/investimento/novo" element={<CadastrarInvestimento />} />

        {/* rota de erro */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
