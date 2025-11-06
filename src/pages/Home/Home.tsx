import { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [despesa, setDespesa] = useState<number>(0);
  const [receita, setReceita] = useState<number>(0);
  const [investimento, setInvestimento] = useState<number>(0);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/despesa/total")
      .then((response) => {
        setDespesa(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:8080/api/investimento/total")
      .then((response) => {
        setInvestimento(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://localhost:8080/api/receita/total")
      .then((response) => {
        setReceita(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Bem-vindo(a) ao Fintech</h1>
        <p className="home-subtitle">
          Aqui está um breve resumo de suas ultimas movimentações financeiras:
        </p>

        <div className="cards-container">
          <div className="card card-receitas">
            <h3>📈 Receitas</h3>
            <p>R$ {receita.toFixed(2)}</p>
          </div>

          <div className="card card-despesas">
            <h3>📉 Despesas</h3>
            <p>R$ {despesa.toFixed(2)}</p>
          </div>

          <div className="card card-invest">
            <h3>📈 Investimentos</h3>
            <p>R$ {investimento.toFixed(2)}</p>
          </div>

          <div className="card card-saldo">
            <h3>💰 Saldo Total</h3>
            <p>R$ {(receita - despesa).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
