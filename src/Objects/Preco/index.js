import React from 'react'
import Title from '../../Components/Title'
import { PrecoBackground, PrecosWrapper } from './style'
import Precos from '../../Components/Precos'

const Preco = () => {
  const planos = [
    {
      plano: "Semestral",
      parcelas: "6",
      valor: "60",
      total: "360"
    },
    {
      plano: "Anual",
      parcelas: "12",
      valor: "50",
      total: "600"
    }]

  return (
    <PrecoBackground className="section" id="preco">
      <div className="container">
        <Title>Preços</Title>
        <h2>Todos os cursos e aulas de música, hoje!</h2>
        <PrecosWrapper>
          {planos.map(item => (
            <Precos
              key={item.plano}
              plano={item.plano}
              parcelas={item.parcelas}
              valor={item.valor}
              total={item.total}
            />
          ))}
        </PrecosWrapper>
        <p>Pagamento seguro com PayPal<br />Oferecemos boleto à vista, <span>basta entrar em contato</span></p>
      </div>
    </PrecoBackground>

  )
}

export default Preco
