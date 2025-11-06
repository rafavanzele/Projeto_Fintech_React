import axios from "axios";
import "./CadastrarInvestimento.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CadastrarInvestimento = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Estados dos campos do formulário
  const [tipo, setTipo] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    if (state && state.movimentacao) {
      const desp = state.movimentacao;
      setDescricao(desp.descricao || "");
      setValor(desp.valor?.toString() || "");
      setTipo(desp.tipoInvestimento || "");
      setData(desp.dataInvestimento || "");
    }
  }, [state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const novoInvestimento = {
      tipoInvestimento: tipo,
      idUsuario: 2,
      valor: parseFloat(valor),
      dataInvestimento: data,
      descricao,
    };

    try {
      if (state && state.movimentacao && state.movimentacao.id) {
        await axios.put(
          `http://localhost:8080/api/investimento/${state.movimentacao.id}`,
          novoInvestimento
        );
      } else {
        await axios.post(
          "http://localhost:8080/api/investimento",
          novoInvestimento
        );
      }

      navigate("/investimento");
    } catch (error) {
      console.error("Erro ao salvar investimento:", error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">
          {state && state.movimentacao
            ? "Editar Investimento"
            : "Cadastrar Novo Investimento"}
        </h2>

        <form className="form-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="tipo">Tipo de Investimento</label>
            <input
              type="text"
              id="tipo"
              name="tipo"
              placeholder="Ex: Ações, Tesouro Direto, CDB..."
              required
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="valor">Valor Investido (R$)</label>
            <input
              type="number"
              id="valor"
              name="valor"
              step="0.01"
              placeholder="Ex: 500.00"
              required
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="data">Data do Investimento</label>
            <input
              type="date"
              id="data"
              name="data"
              required
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="descricao">Descrição </label>
            <input
              type="text"
              id="descricao"
              name="descricao"
              required
              placeholder="Ex: Aplicação de longo prazo, juros mensais..."
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-salvar">
            {state && state.movimentacao
              ? "Atualizar Investimento"
              : "Salvar Investimento"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastrarInvestimento;
