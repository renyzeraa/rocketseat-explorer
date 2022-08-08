import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/renyzeraa.png" alt="User Image" />
        <div>
          <span>Bem-vindo</span>
          <strong>Renan Silva</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
