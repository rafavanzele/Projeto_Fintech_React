import './Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-title">Bem-vindo(a) ao Fintech</h1>
                <p className="home-subtitle">
                    Aqui está um breve resumo de suas ultimas movimentações financeiras:
                </p>

                <div className="cards-container">
                    <div className="card card-saldo">
                        <h3>💰 Saldo Total</h3>
                        <p>R$ 12.750,00</p>
                    </div>

                    <div className="card card-despesas">
                        <h3>📉 Despesas</h3>
                        <p>R$ 4.320,00</p>
                    </div>

                    <div className="card card-invest">
                        <h3>📈 Investimentos</h3>
                        <p>R$ 8.430,00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
