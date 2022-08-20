import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'
import { useAuth } from '../../hooks/auth'

export function Header() {
  const { signOut } = useAuth()

  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/renyzeraa.png" alt="User Image" />
        <div>
          <span>Bem-vindo</span>
          <strong>Renan Silva</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
