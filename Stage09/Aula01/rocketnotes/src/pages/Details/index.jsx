import { Container } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

export function Details() {
  return (
    <Container>
      <Header />
      <h1>Hello World</h1>
      <Button title="Voltar" />
    </Container>
  )
}
