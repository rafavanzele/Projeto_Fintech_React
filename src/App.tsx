import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Despesas from "./pages/Despesas/Despesas";
import Investimento from "./pages/Investimento/Investimento";
import Error from "./pages/Error/Error";
import CadastrarDespesas from "./pages/CadastrarDespesas/CadastrarDespesas";
import CadastrarInvestimento from "./pages/CadastrarInvestimento/CadastrarInvestimento";

import "./index.css";
import "./App.css";
import CadastrarReceitas from "./pages/CadastrarReceitas/CadastrarReceitas";
import Receitas from "./pages/Receitas/Receitas";

function AppContent() {
  const location = useLocation();
  const hideHeader = location.pathname === "/login";

  return (
    <>
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/despesa" element={<Despesas />} />
        <Route path="/receita" element={<Receitas />} />
        <Route path="/investimento" element={<Investimento />} />
        <Route path="/despesa/novo" element={<CadastrarDespesas />} />
        <Route path="/investimento/novo" element={<CadastrarInvestimento />} />
        <Route path="/receita/novo" element={<CadastrarReceitas />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
