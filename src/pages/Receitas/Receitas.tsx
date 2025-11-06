import "./Receitas.css";
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

const Receitas = () => {
  const navigate = useNavigate();
  const [receitas, setReceitas] = useState<MovimentacaoProp[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/receita")
      .then((response) => {
        setReceitas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="receitas-container">
      <div className="table-wrap">
        <div className="table-title">💸 Receitas</div>
        <Table movimentacoes={receitas} />

        <div className="btn-container">
          <button
            className="btn-cadastrar"
            onClick={() => navigate("/receita/novo")}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receitas;
