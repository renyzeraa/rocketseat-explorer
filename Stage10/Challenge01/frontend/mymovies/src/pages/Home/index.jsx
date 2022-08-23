import { Container } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()

  return (
    <Container>
      <Header></Header>
      <main>
        <section className="content">
          <h1>Meus Filmes Favoritos ✨</h1>
          <a onClick={() => navigate('/create')}>
            <Button title="+ Adicionar filme"></Button>
          </a>
        </section>
        <section className="cards">
          <Card title="Teste" />
          <Card title="Teste" />
          <Card title="Teste" />
        </section>
      </main>
    </Container>
  )
}
