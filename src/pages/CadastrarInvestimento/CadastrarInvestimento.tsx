import './CadastrarInvestimento.css'
import { useNavigate } from 'react-router-dom'

const CadastrarInvestimento = () => {
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // depois conectaremos ao backend (POST /api/investimento)
        console.log('Investimento cadastrado com sucesso!')
        navigate('/investimento') // volta pra tela de listagem
    }

    return (
        <div className="form-container">
            <div className="form-card">
                <h2 className="form-title">Cadastrar Novo Investimento</h2>

                <form className="form-body" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="tipo">Tipo de Investimento</label>
                        <input
                            type="text"
                            id="tipo"
                            name="tipo"
                            placeholder="Ex: Ações, Tesouro Direto, CDB..."
                            required
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
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="data">Data do Investimento</label>
                        <input type="date" id="data" name="data" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="descricao">Descrição (opcional)</label>
                        <input
                            type="text"
                            id="descricao"
                            name="descricao"
                            placeholder="Ex: Aplicação de longo prazo, juros mensais..."
                        />
                    </div>


                    <button type="submit" className="btn-salvar">
                        Salvar Investimento
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CadastrarInvestimento
