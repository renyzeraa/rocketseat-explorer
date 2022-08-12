import { Container } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'

import { FiPlus } from 'react-icons/fi'

export function Home() {
  return (
    <Container>
      <Header></Header>
      <main>
        <section className="content">
          <h1>Meus Filmes</h1>
          <Button title="+ Adicionar filme"></Button>
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
