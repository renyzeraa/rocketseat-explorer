import { Container } from './styles'
import { Input } from '../../components/Input'
import { FiSearch } from 'react-icons/fi'
export function Header() {
  return (
    <Container>
      <h1>
        <a href="#">RocketMovies</a>
      </h1>
      <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      <div>
        <div>
          <a href="#">Renan Silva</a>
          <a href="#">sair</a>
        </div>
        <img src="https://github.com/renyzeraa.png" alt="User Image" />
      </div>
    </Container>
  )
}
