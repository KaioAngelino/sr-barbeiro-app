import Link from 'next/link';

import { Container } from '../styles/pages/home';

export default function Home() {
  return (
    <Container>
      <div className="title">
        <h1>👋 Seja bem vindo!</h1>
        <p>
          Agende um horário com <br />
          os melhores da cidade.
        </p>
      </div>

      <div className="register">
        
        <Link href="/agendamento">
          <button type="button">
            Agendar agora
          </button>
        </Link>

        <button type="button" className="registerNow">
          Cadastrar-se
        </button>
        <span>
          Cadastre-se e tenha acesso as<br/>
          melhores promoções.
        </span>
      </div>

      <div className="logo">
        <img src="image/logo.svg" alt="Sr barbeiro" />
      </div>
    </Container>
  )
}
