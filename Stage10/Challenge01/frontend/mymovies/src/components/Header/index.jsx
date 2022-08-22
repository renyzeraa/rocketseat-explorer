import { Container } from './styles'
import { Input } from '../../components/Input'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

export function Header() {
  const { signOut } = useAuth()
  const navigate = useNavigate()
  return (
    <Container>
      <div className="header">
        <h1>RocketMovies</h1>
        <Input placeholder="Pesquisar pelo título" />
        <div className="profile">
          <div>
            <a
              onClick={() => {
                navigate('/profile')
              }}
            >
              Renan Silva
            </a>
            <a onClick={signOut}>sair</a>
          </div>
          <a
            onClick={() => {
              navigate('/profile')
            }}
          >
            <img src="https://github.com/renyzeraa.png" alt="User Image" />
          </a>
        </div>
      </div>
    </Container>
  )
}
