import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { FiPlus } from 'react-icons/fi'
export function Home() {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      <Header />

      <Menu>
        <li>
          <ButtonText title="Todos" isActive></ButtonText>
        </li>
        <li>
          <ButtonText title="Node"></ButtonText>
        </li>
        <li>
          <ButtonText title="React"></ButtonText>
        </li>
      </Menu>

      <Search></Search>

      <Content></Content>

      <NewNote>
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  )
}
