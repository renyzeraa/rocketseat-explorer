import { Container, Form, Background } from './styles'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Crie sua conta</h2>
        <Input placeholder="Nome" type="text" icon={FiUser}></Input>

        <Input placeholder="E-mail" type="text" icon={FiMail}></Input>
        <Input placeholder="Senha" type="password" icon={FiLock}></Input>
        <Button title="Cadastrar"></Button>
        <Link to="/">
          <FiArrowLeft />
          Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  )
}
