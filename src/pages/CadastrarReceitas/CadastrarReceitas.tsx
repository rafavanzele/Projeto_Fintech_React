import axios from "axios";
import "./CadastrarReceitas.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const CadastrarReceitas = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    if (state && state.movimentacao) {
      const desp = state.movimentacao;
      setDescricao(desp.descricao || "");
      setValor(desp.valor?.toString() || "");
      setData(desp.dataReceita || "");
    }
  }, [state]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const novaReceita = {
      descricao,
      valor: parseFloat(valor),
      dataReceita: data,
      idUsuario: 2,
    };

    try {
      if (state && state.movimentacao && state.movimentacao.id) {
        await axios.put(
          `http://localhost:8080/api/receita/${state.movimentacao.id}`,
          novaReceita
        );
      } else {
        await axios.post("http://localhost:8080/api/receita", novaReceita);
      }

      navigate("/receita");
    } catch (error) {
      console.error("Erro ao salvar receita:", error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <h2 className="form-title">
          {state && state.movimentacao
            ? "Editar Receita"
            : "Cadastrar Nova Receita"}
        </h2>

        <form className="form-body" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="descricao">Descrição</label>
            <input
              type="text"
              id="descricao"
              name="descricao"
              placeholder="Ex: CDB"
              required
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="valor">Valor (R$)</label>
            <input
              type="number"
              id="valor"
              name="valor"
              step="0.01"
              placeholder="Ex: 250.00"
              required
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="data">Data da Receita</label>
            <input
              type="date"
              id="data"
              name="data"
              required
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-salvar">
            {state && state.movimentacao
              ? "Atualizar Receita"
              : "Salvar Receita"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CadastrarReceitas;
