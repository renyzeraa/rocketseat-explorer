import { Container, Form, Background } from './styles'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { FiMail, FiLock } from 'react-icons/fi'
export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>
        <h2>Faça seu login</h2>
        <Input placeholder="E-mail" type="text" icon={FiMail}></Input>
        <Input placeholder="Senha" type="password" icon={FiLock}></Input>
        <Button title="Login"></Button>
        <a href="#">Criar Conta</a>
      </Form>
      <Background />
    </Container>
  )
}
