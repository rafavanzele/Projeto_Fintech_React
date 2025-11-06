import { useEffect } from "react";
import "./Table.css";
import type { MovimentacaoProp } from "../../pages/Despesas/Despesas";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const Table = ({ movimentacoes }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log(movimentacoes);
  }, [movimentacoes]);

  function getUrl(): string {
    return location.pathname.replace("/", "");
  }

  function excluirMovimentacao(id: number) {
    axios.delete(`http://localhost:8080/api/${getUrl()}/${id}`);
    window.location.reload();
  }

  function editarMovimentacao(movimentacao) {
    navigate(`/${getUrl()}/novo`, { state: { movimentacao } });
  }

  return (
    <table className="fin-table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Valor</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movimentacoes &&
          movimentacoes.map((mov: MovimentacaoProp, i: number) => (
            <tr key={i}>
              <td>{mov.descricao}</td>

              <td>R$ {mov.valor}</td>
              <td colSpan={2}>
                <div className="btn-container">
                  <button
                    className="btn-editar"
                    onClick={(): void => editarMovimentacao(mov)}
                  >
                    <MdEdit color="#2196f3" size={18} />
                  </button>
                  <button
                    className="btn-editar"
                    onClick={(): void => excluirMovimentacao(mov.id)}
                  >
                    <FaTrash color="#f44336" size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;
