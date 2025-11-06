import "./Despesas.css";
import Table from "../../components/Table/Table";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export interface MovimentacaoProp {
  id: number;
  dataDespesa?: string;
  valor: number;
  descricao: string;
  tipoInvestimento?: string;
  dataInvestimento?: string;
}

const Despesas = () => {
  const navigate = useNavigate();
  const [despesas, setDespesas] = useState<MovimentacaoProp[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/despesa")
      .then((response) => {
        setDespesas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="despesas-container">
      <div className="table-wrap">
        <div className="table-title">💸 Despesas</div>
        <Table movimentacoes={despesas} />

        <div className="btn-container">
          <button
            className="btn-cadastrar"
            onClick={() => navigate("/despesa/novo")}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Despesas;
