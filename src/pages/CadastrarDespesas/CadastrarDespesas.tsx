import './CadastrarDespesas.css'
import { useNavigate } from 'react-router-dom'

const CadastrarDespesas = () => {
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // depois aqui chamaremos a API do backend (POST /api/despesa)
        console.log('Despesa cadastrada com sucesso!')
        navigate('/despesa') // volta pra tela de listagem
    }

    return (
        <div className="form-container">
            <div className="form-card">
                <h2 className="form-title">Cadastrar Nova Despesa</h2>

                <form className="form-body" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="descricao">Descrição</label>
                        <input
                            type="text"
                            id="descricao"
                            name="descricao"
                            placeholder="Ex: Conta de Luz"
                            required
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
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="data">Data da Despesa</label>
                        <input type="date" id="data" name="data" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="descricao">Descrição (opcional)</label>
                        <input
                            type="text"
                            id="descricao"
                            name="descricao"
                            placeholder="Ex: Conta mensal de energia elétrica"
                        />
                    </div>


                    <button type="submit" className="btn-salvar">
                        Salvar Despesa
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CadastrarDespesas
